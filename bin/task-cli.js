#!/usr/bin/env node
/**
 * @author LuanBertozzi7
 * @version 0.0.2
 */

import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

import { taskFileCreate } from "../utilities/tasks.create.js";
taskFileCreate();

// cli functions
import { taskAdd } from "../src/cli/task.add.js";
import { taskDelete } from "../src/cli/task.remove.js";
import { taskList } from "../src/cli/task.list.js";
import { taskUpdate } from "../src/cli/task.update.js";
import { taskDone } from "../src/cli/task.mark-done.js";
import { taskProgress } from "../src/cli/task.mark-in-progress.js";
import { taskDebug } from "../src/cli/task.debug.js";

const rl = readline.createInterface({ input, output, terminal: true });

function printHelp() {
  console.log(`
comandos:
  add <descrição>
  delete <id>
  update <id> <nova descrição>
  list [status]
  mark-done <id>
  mark-in-progress <id>
  help
  exit | quit
`);
}

function tokenize(line) {
  const matches = line.match(/"([^"]*)"|'([^']*)'|(\S+)/g) ?? [];
  return matches.map((t) => t.replace(/^["']|["']$/g, ""));
}

function runCommand(command, rest) {
  switch (command) {
    case "add": {
      taskAdd(rest[0]);
      break;
    }

    case "delete": {
      taskDelete(rest[0]);
      break;
    }

    case "list": {
      taskList(rest[0]);
      break;
    }

    case "update": {
      const [id, ...descParts] = rest;
      const newDesc = descParts.join(" ").trim();
      taskUpdate([id, newDesc]);
      break;
    }

    case "mark-done": {
      taskDone(rest[0]);
      break;
    }

    case "mark-in-progress": {
      taskProgress(rest[0]);
      break;
    }

    case "help": {
      printHelp();
      break;
    }

    case "exit":
    case "quit": {
      rl.close();
      break;
    }
    case "debug": {
      taskDebug();
      break;
    }

    default:
      console.log('comando inválido. Digite "help".');
  }
}

console.log('Task Tracker (modo interativo). Digite "help".');
rl.setPrompt("> ");
rl.prompt();

rl.on("line", (line) => {
  try {
    const tokens = tokenize(line.trim());
    if (tokens.length === 0) return rl.prompt();

    const [commandRaw, ...rest] = tokens;
    const command = String(commandRaw).toLowerCase();

    runCommand(command, rest);
  } catch (e) {
    console.error(String(e?.message || e));
  } finally {
    rl.prompt();
  }
});

rl.on("close", () => {
  console.log("Saindo.");
  process.exit(0);
});
