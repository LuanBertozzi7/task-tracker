import { addTask } from "../core/task.service.js";

export function taskAddCli(args) {
  const description = args.join(' ').trim();
  const task = addTask(description);
  console.log(`Task adicionada! ID: ${task.id}`);
}