import { loadTasks } from "../../utilities/tasks.create.js";

export function taskDebug() {
  const tasks = loadTasks();
  console.log(tasks);
}