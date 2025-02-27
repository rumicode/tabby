import { commands, window, workspace, ConfigurationTarget } from "vscode";
import type {
  HighCompletionTimeoutRateIssue,
  SlowCompletionResponseTimeIssue,
  ConnectionFailedIssue,
} from "tabby-agent";
import { agent } from "./agent";

function showInformationWhenInitializing() {
  window.showInformationMessage("RumiCode is initializing.", "Settings").then((selection) => {
    switch (selection) {
      case "Settings":
        commands.executeCommand("rumicode.openSettings");
        break;
    }
  });
}

function showInformationWhenAutomaticTrigger() {
  window
    .showInformationMessage(
      "automatic code completion is enabled. 🚀 Switch to manual trigger mode?",
      "Manual Mode",
      "Open Dashboard",
      "Settings",
    )
    .then((selection) => {
      switch (selection) {
        case "Manual Mode":
          commands.executeCommand("rumicode.toggleInlineCompletionTriggerMode", "manual");
          break;
        case "Open Dashboard":
          commands.executeCommand("rumicode.openDashboard");
          break;
        case "Settings":
          commands.executeCommand("rumicode.openSettings");
          break;
      }
    });
}

function showInformationWhenManualTrigger() {
  window
    .showInformationMessage(
      "standing by. Trigger code completion manually?",
      "Trigger",
      "Automatic Mode",
      "Open Dashboard",
      "Settings",
    )
    .then((selection) => {
      switch (selection) {
        case "Trigger":
          // Show information when triggering code completion..
          commands.executeCommand("editor.action.inlineSuggest.trigger");
          break;
        case "Automatic Mode":
          commands.executeCommand("rumicode.toggleInlineCompletionTriggerMode", "automatic");
          break;
        case "Open Dashboard":
          commands.executeCommand("rumicode.openDashboard");
          break;
        case "Settings":
          commands.executeCommand("rumicode.openSettings");
          break;
      }
    });
}

function showInformationWhenManualTriggerLoading() {
  window.showInformationMessage("RumiCode is generating code completions.", "Settings").then((selection) => {
    switch (selection) {
      case "Settings":
        commands.executeCommand("rumicode.openSettings");
        break;
    }
  });
}

function showInformationWhenInlineSuggestDisabled() {
  window
    .showWarningMessage(
      "RumiCode's suggestion is not showing because inline suggestion is disabled. Please enable it first.",
      "Enable",
      "Settings",
    )
    .then((selection) => {
      switch (selection) {
        case "Enable":
          console.debug(`Set editor.inlineSuggest.enabled: true.`);
          workspace.getConfiguration("editor").update("inlineSuggest.enabled", true, ConfigurationTarget.Global, false);
          break;
        case "Settings":
          commands.executeCommand("workbench.action.openSettings", "@id:editor.inlineSuggest.enabled");
          break;
      }
    });
}

function showInformationWhenDisconnected(modal: boolean = false) {
  if (modal) {
    const message = agent().getIssueDetail<ConnectionFailedIssue>({ name: "connectionFailed" })?.message;
    window
      .showWarningMessage(
        `Cannot connect to RumiCode Server.`,
        {
          modal: true,
          detail: message,
        },
        "Settings",
        "Online Help...",
      )
      .then((selection) => {
        switch (selection) {
          case "Online Help...":
            commands.executeCommand("rumicode.openOnlineHelp");
            break;
          case "Settings":
            commands.executeCommand("rumicode.openSettings");
            break;
        }
      });
  } else {
    window.showWarningMessage(`Cannot connect to Tabby Server.`, "Detail", "Settings").then((selection) => {
      switch (selection) {
        case "Detail":
          showInformationWhenDisconnected(true);
          break;
        case "Settings":
          commands.executeCommand("rumicode.openSettings");
          break;
      }
    });
  }
}

function showInformationWhenUnauthorized() {
  let message = "RumiCode server requires authentication, ";
  const currentToken = agent().getConfig()["server"]["token"].trim();
  if (currentToken.length > 0) {
    message += ` but the current token is invalid.`;
  } else {
    message += ` please set your personal token.`;
  }
  window.showWarningMessage(message, "Set Credentials").then((selection) => {
    switch (selection) {
      case "Set Credentials":
        commands.executeCommand("rumicode.setApiToken");
        break;
    }
  });
}

function showInformationWhenUnpaid() {
  const message = "Your RumiCode subscription has expired. Please proceed to purchase a subscription.";
  window.showWarningMessage(message, "Subscribe Again ✨").then((selection) => {
    switch (selection) {
      case "Subscribe Again ✨":
        commands.executeCommand("rumicode.openDashboard");
        break;
    }
  });
}

/** @deprecated Tabby Cloud auth */
function showInformationStartAuth(callbacks?: { onAuthStart?: () => void; onAuthEnd?: () => void }) {
  window
    .showWarningMessage(
      "RumiCode Server requires authorization. Continue to open authorization page in your browser.",
      "Continue",
      "Settings",
    )
    .then((selection) => {
      switch (selection) {
        case "Continue":
          commands.executeCommand("rumicode.openAuthPage", callbacks);
          break;
        case "Settings":
          commands.executeCommand("rumicode.openSettings");
      }
    });
}

/** @deprecated Tabby Cloud auth */
function showInformationAuthSuccess() {
  window.showInformationMessage("Congrats, you're authorized, start to use Tabby now.");
}

/** @deprecated Tabby Cloud auth */
function showInformationWhenStartAuthButAlreadyAuthorized() {
  window.showInformationMessage("You are already authorized now.");
}

/** @deprecated Tabby Cloud auth */
function showInformationWhenAuthFailed() {
  window.showWarningMessage("Cannot connect to server. Please check settings.", "Settings").then((selection) => {
    switch (selection) {
      case "Settings":
        commands.executeCommand("rumicode.openSettings");
        break;
    }
  });
}

function getHelpMessageForCompletionResponseTimeIssue() {
  let helpMessageForRunningLargeModelOnCPU = "";
  const serverHealthState = agent().getServerHealthState();
  if (serverHealthState?.device === "cpu" && serverHealthState?.model?.match(/[0-9.]+B$/)) {
    helpMessageForRunningLargeModelOnCPU +=
      `Your RumiCode server is running model ${serverHealthState?.model} on CPU. ` +
      "This model may be performing poorly due to its large parameter size, please consider trying smaller models or switch to GPU. " +
      "You can find a list of recommend models in the online documentation.\n";
  }
  let commonHelpMessage = "";
  const host = new URL(agent().getConfig().server.endpoint).host;
  if (helpMessageForRunningLargeModelOnCPU.length == 0) {
    commonHelpMessage += ` - The running model ${
      serverHealthState?.model ?? ""
    } may be performing poorly due to its large parameter size. `;
    commonHelpMessage +=
      "Please consider trying smaller models. You can find a list of recommend models in the online documentation.\n";
  }
  if (!(host.startsWith("localhost") || host.startsWith("127.0.0.1"))) {
    commonHelpMessage += " - A poor network connection. Please check your network and proxy settings.\n";
    commonHelpMessage += " - Server overload. Please contact RumiCode server administrator for assistance.\n";
  }
  let message = "";
  if (helpMessageForRunningLargeModelOnCPU.length > 0) {
    message += helpMessageForRunningLargeModelOnCPU + "\n";
    if (commonHelpMessage.length > 0) {
      message += "Other possible causes of this issue: \n";
      message += commonHelpMessage;
    }
  } else {
    // commonHelpMessage should not be empty here
    message += "Possible causes of this issue: \n";
    message += commonHelpMessage;
  }
  return message;
}

function showInformationWhenSlowCompletionResponseTime(modal: boolean = false) {
  if (modal) {
    const stats = agent().getIssueDetail<SlowCompletionResponseTimeIssue>({
      name: "slowCompletionResponseTime",
    })?.completionResponseStats;
    let statsMessage = "";
    if (stats && stats["responses"] && stats["averageResponseTime"]) {
      statsMessage = `The average response time of recent ${stats["responses"]} completion requests is ${Number(
        stats["averageResponseTime"],
      ).toFixed(0)}ms.\n\n`;
    }
    window
      .showWarningMessage(
        "Completion requests appear to take too much time.",
        {
          modal: true,
          detail: statsMessage + getHelpMessageForCompletionResponseTimeIssue(),
        },
        "Online Help...",
        "Don't Show Again",
      )
      .then((selection) => {
        switch (selection) {
          case "Online Help...":
            commands.executeCommand("rumicode.openOnlineHelp");
            break;
          case "Don't Show Again":
            commands.executeCommand("rumicode.notifications.mute", "completionResponseTimeIssues");
            break;
        }
      });
  } else {
    window
      .showWarningMessage("Completion requests appear to take too much time.", "Detail", "Settings", "Don't Show Again")
      .then((selection) => {
        switch (selection) {
          case "Detail":
            showInformationWhenSlowCompletionResponseTime(true);
            break;
          case "Settings":
            commands.executeCommand("rumicode.openSettings");
            break;
          case "Don't Show Again":
            commands.executeCommand("rumicode.notifications.mute", "completionResponseTimeIssues");
            break;
        }
      });
  }
}

function showInformationWhenHighCompletionTimeoutRate(modal: boolean = false) {
  if (modal) {
    const stats = agent().getIssueDetail<HighCompletionTimeoutRateIssue>({
      name: "highCompletionTimeoutRate",
    })?.completionResponseStats;
    let statsMessage = "";
    if (stats && stats["total"] && stats["timeouts"]) {
      statsMessage = `${stats["timeouts"]} of ${stats["total"]} completion requests timed out.\n\n`;
    }
    window
      .showWarningMessage(
        "Most completion requests timed out.",
        {
          modal: true,
          detail: statsMessage + getHelpMessageForCompletionResponseTimeIssue(),
        },
        "Online Help...",
        "Don't Show Again",
      )
      .then((selection) => {
        switch (selection) {
          case "Online Help...":
            commands.executeCommand("rumicode.openOnlineHelp");
            break;
          case "Don't Show Again":
            commands.executeCommand("rumicode.notifications.mute", "completionResponseTimeIssues");
            break;
        }
      });
  } else {
    window
      .showWarningMessage("Most completion requests timed out.", "Detail", "Settings", "Don't Show Again")
      .then((selection) => {
        switch (selection) {
          case "Detail":
            showInformationWhenHighCompletionTimeoutRate(true);
            break;
          case "Settings":
            commands.executeCommand("rumicode.openSettings");
            break;
          case "Don't Show Again":
            commands.executeCommand("rumicode.notifications.mute", "completionResponseTimeIssues");
            break;
        }
      });
  }
}

export const notifications = {
  showInformationWhenInitializing,
  showInformationWhenAutomaticTrigger,
  showInformationWhenManualTrigger,
  showInformationWhenManualTriggerLoading,
  showInformationWhenInlineSuggestDisabled,
  showInformationWhenDisconnected,
  showInformationWhenUnauthorized,
  showInformationWhenUnpaid,
  showInformationStartAuth,
  showInformationAuthSuccess,
  showInformationWhenStartAuthButAlreadyAuthorized,
  showInformationWhenAuthFailed,
  showInformationWhenSlowCompletionResponseTime,
  showInformationWhenHighCompletionTimeoutRate,
};
