/* eslint-disable @typescript-eslint/consistent-type-definitions */

// This file documents the Cody Agent JSON-RPC protocol. Consult the JSON-RPC
// specification to learn about how JSON-RPC works https://www.jsonrpc.org/specification
// The Cody Agent server only supports transport via stdout/stdin.

// The JSON-RPC requests of the Cody Agent protocol. Requests are async
// functions that return some (possibly null) value.
export type Requests = {
  // ================
  // Client -> Server
  // ================

  // The 'initialize' request must be sent at the start of the connection
  // before any other request/notification is sent.
  initialize: [ClientInfo, ServerInfo];
  // The 'shutdown' request must be sent before terminating the agent process.
  shutdown: [null, null];

  // Client requests the agent server to lists all recipes that are supported
  // by the agent.
  "recipes/list": [null, RecipeInfo[]];
  // Client requests the agent server to execute an individual recipe.
  // The response is null because the AI/Assistant messages are streamed through
  // the chat/updateMessageInProgress notification. The flow to trigger a recipe
  // is like this:
  // client --- recipes/execute --> server
  // client <-- chat/updateMessageInProgress --- server
  //             ....
  // client <-- chat/updateMessageInProgress --- server
  "recipes/execute": [ExecuteRecipeParams, null];

  "autocomplete/execute": [AutocompleteParams, AutocompleteResult];

  "graphql/currentUserId": [null, string];

  "graphql/currentUserIsPro": [null, boolean];

  "featureFlags/getFeatureFlag": [{ flagName: string }, boolean | null];

  /**
   * Record telemetry events.
   */
  "telemetry/recordEvent": [TelemetryEvent, null];

  "graphql/getRepoIdIfEmbeddingExists": [{ repoName: string }, string | null];
  "graphql/getRepoId": [{ repoName: string }, string | null];

  "git/codebaseName": [{ url: string }, string | null];

  // ================
  // Server -> Client
  // ================
};

// The JSON-RPC notifications of the Cody Agent protocol. Notifications are
// synchronous fire-and-forget messages that have no return value. Notifications are
// conventionally used to represent streams of values.
export type Notifications = {
  // ================
  // Client -> Server
  // ================

  // The 'initalized' notification must be sent after receiving the 'initialize' response.
  initialized: [null];
  // The 'exit' notification must be sent after the client receives the 'shutdown' response.
  exit: [null];

  // The server should use the provided connection configuration for all
  // subsequent requests/notifications. The previous extension configuration
  // should no longer be used.
  "extensionConfiguration/didChange": [ExtensionConfiguration];

  // Lifecycle notifications for the client to notify the server about text
  // contents of documents and to notify which document is currently focused.
  "textDocument/didOpen": [TextDocument];
  // The 'textDocument/didChange' notification should be sent on almost every
  // keystroke, whether the text contents changed or the cursor/selection
  // changed.  Leave the `content` property undefined when the document's
  // content is unchanged.
  "textDocument/didChange": [TextDocument];
  // The user focused on a document without changing the document's content.
  // Only the 'uri' property is required, other properties are ignored.
  "textDocument/didFocus": [TextDocument];
  // The user closed the editor tab for the given document.
  // Only the 'uri' property is required, other properties are ignored.
  "textDocument/didClose": [TextDocument];

  "$/cancelRequest": [CancelParams];
  // The user no longer wishes to consider the last autocomplete candidate
  // and the current autocomplete id should not be reused.
  "autocomplete/clearLastCandidate": [null];
  // The completion was presented to the user, and will be logged for telemetry
  // purposes.
  "autocomplete/completionSuggested": [CompletionItemParams];
  // The completion was accepted by the user, and will be logged for telemetry
  // purposes.
  "autocomplete/completionAccepted": [CompletionItemParams];
  // Resets the chat transcript and clears any in-progress interactions.
  // This notification should be sent when the user starts a new conversation.
  // The chat transcript grows indefinitely if this notification is never sent.
  "transcript/reset": [null];

  "debug/message": [DebugMessage];
};

export interface CancelParams {
  id: string | number;
}

export interface CompletionItemParams {
  completionID: string;
}

export interface AutocompleteParams {
  uri: string;
  filePath?: string;
  position: Position;
  // Defaults to 'Automatic' for autocompletions which were not explicitly
  // triggered.
  triggerKind?: "Automatic" | "Invoke";
  selectedCompletionInfo?: SelectedCompletionInfo;
}

export interface SelectedCompletionInfo {
  readonly range: Range;
  readonly text: string;
}
export interface AutocompleteResult {
  items: AutocompleteItem[];

  /** completionEvent is not deprecated because it's used by non-editor clients like evaluate-autocomplete that need access to book-keeping data to evaluate results. */
  completionEvent?: string;
}

export interface AutocompleteItem {
  id: string;
  insertText: string;
  range: Range;
}

export interface ClientInfo {
  name: string;
  version: string;
  workspaceRootUri: string;

  /** @deprecated Use `workspaceRootUri` instead. */
  workspaceRootPath?: string;

  extensionConfiguration?: ExtensionConfiguration;
  capabilities?: ClientCapabilities;
}

export interface ClientCapabilities {
  completions?: "none";
  //  When 'streaming', handles 'chat/updateMessageInProgress' streaming notifications.
  chat?: "none" | "streaming";
  git?: "none" | "disabled";
}

export interface ServerInfo {
  name: string;
  authenticated: boolean;
  codyEnabled: boolean;
  codyVersion: string | null;
  capabilities?: ServerCapabilities;
}
export interface ServerCapabilities {}

export interface ExtensionConfiguration {
  serverEndpoint: string;
  proxy?: string | null;
  accessToken: string;
  customHeaders: Record<string, string>;

  /**
   * anonymousUserID is an important component of telemetry events that get
   * recorded. It is currently optional for backwards compatibility, but
   * it is strongly recommended to set this when connecting to Agent.
   */
  anonymousUserID?: string;

  autocompleteAdvancedProvider?: string;
  autocompleteAdvancedServerEndpoint?: string | null;
  autocompleteAdvancedModel?: string | null;
  autocompleteAdvancedAccessToken?: string | null;
  debug?: boolean;
  verboseDebug?: boolean;
  codebase?: string;

  /**
   * When passed, the Agent will handle recording events.
   * If not passed, client must send `graphql/logEvent` requests manually.
   * @deprecated This is only used for the legacy logEvent - use `telemetry` instead.
   */
  eventProperties?: EventProperties;

  customConfiguration?: Record<string, any>;
}

/**
 * TelemetryEvent is a JSON RPC format of the arguments to a typical
 * TelemetryEventRecorder implementation from '@sourcegraph/telemetry'.
 * This type is intended for use in the Agent RPC handler only - clients sending
 * events to the Agent should use 'newTelemetryEvent()' to create event objects,
 * which uses the same type constraints as '(TelemetryEventRecorder).recordEvent()'.
 * @param feature must be camelCase and '.'-delimited, e.g. 'myFeature.subFeature'.
 * Features should NOT include the client platform, e.g. 'vscode' - information
 * about the client is automatically attached to all events. Note that Cody
 * events MUST have provide feature 'cody' or have a feature prefixed with
 * 'cody.' to be considered Cody events.
 * @param action must be camelCase and simple, e.g. 'submit', 'failed', or
 * 'success', in the context of feature.
 * @param parameters should be as described in {@link TelemetryEventParameters}.
 */
export interface TelemetryEvent {
  feature: string;
  action: string;
}

/**
 * @deprecated EventProperties are no longer referenced.
 */
export interface EventProperties {
  /**
   * @deprecated Use (ExtensionConfiguration).anonymousUserID instead
   */
  anonymousUserID: string;

  /** Event prefix, like 'CodyNeovimPlugin' */
  prefix: string;

  /** Name of client, like 'NEOVIM_CODY_EXTENSION' */
  client: string;

  /** Source type enum*/
  source: "IDEEXTENSION";
}

export interface Position {
  // 0-indexed
  line: number;
  // 0-indexed
  character: number;
}

export interface Range {
  start: Position;
  end: Position;
}

export interface TextDocument {
  // Use TextDocumentWithUri.fromDocument(TextDocument) if you want to parse this `uri` property.
  uri: string;
  /** @deprecated use `uri` instead. This property only exists for backwards compatibility during the migration period. */
  filePath?: string;
  content?: string;
  selection?: Range;
}

export interface RecipeInfo {
  id: string;
  title: string; // Title Case
}

export interface ExecuteRecipeParams {
  id: string;
  humanChatInput: string;
  data?: any;
}

export interface DebugMessage {
  channel: string;
  message: string;
}
