import { addTask } from "../core/task.service.js";

export function taskAddCli(...rest) {
  const description = rest.join(" ");
  const task = addTask(description);
  console.log(`Task adicionada! ID: ${task.id}`);
}