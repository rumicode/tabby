import { splitLines, regOnlyAutoClosingCloseChars } from "./utils";
import hashObject from "object-hash";

export type CompletionRequest = {
  filepath: string;
  path: string | null;
  language: string;
  text: string;
  position: number;
  indentation?: string;
  clipboard?: string;
  manually?: boolean;
  snippets?: Snippet[];
  maxPrefixLines: number;
  maxSuffixLines: number;
};

export interface Snippet {
  file_name: string;
  content: string;
}

export type CompletionResponseChoice = {
  index: number;
  text: string;
  // Range of the text to be replaced when applying the completion.
  // The range should be limited to the current line.
  replaceRange: {
    start: number;
    end: number;
  };
};

export type CompletionResponse = {
  id: string;
  choices: CompletionResponseChoice[];
};

function isAtLineEndExcludingAutoClosedChar(suffix: string) {
  return suffix.trimEnd().match(regOnlyAutoClosingCloseChars);
}

export class CompletionContext {
  path: string | null;
  filepath: string;
  language: string;
  indentation?: string;
  text: string;
  position: number;
  snippets: Snippet[];
  maxPrefixLines: number;
  maxSuffixLines: number;

  prefix: string;
  suffix: string;
  prefixLines: string[];
  suffixLines: string[];
  currentLinePrefix: string;
  currentLineSuffix: string;

  clipboard: string;

  // "default": the cursor is at the end of the line
  // "fill-in-line": the cursor is not at the end of the line, except auto closed characters
  //   In this case, we assume the completion should be a single line, so multiple lines completion will be dropped.
  mode: "default" | "fill-in-line";
  hash: string;

  constructor(request: CompletionRequest) {
    this.path = request.path;
    this.filepath = request.filepath;
    this.language = request.language;
    this.text = request.text;
    this.position = request.position;
    this.indentation = request.indentation;
    this.snippets = request.snippets ?? [];
    this.maxPrefixLines = request.maxPrefixLines;
    this.maxSuffixLines = request.maxSuffixLines;

    this.prefix = request.text.slice(0, request.position);
    this.suffix = request.text.slice(request.position);
    this.prefixLines = splitLines(this.prefix);
    this.suffixLines = splitLines(this.suffix);
    this.currentLinePrefix = this.prefixLines[this.prefixLines.length - 1] ?? "";
    this.currentLineSuffix = this.suffixLines[0] ?? "";

    this.clipboard = request.clipboard?.trim() ?? "";

    const lineEnd = isAtLineEndExcludingAutoClosedChar(this.suffixLines[0] ?? "");
    this.mode = lineEnd ? "default" : "fill-in-line";
    this.hash = hashObject({
      filepath: this.filepath,
      language: this.language,
      text: this.text,
      position: this.position,
      clipboard: this.clipboard,
    });
  }
}
