import { loadTasks } from "../../utilities/tasks.create.js";

export function TaskList() {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log("Lista vazia.");
    return;
  } 
  tasks.forEach((task) => console.log(`ID:[${task.id}] descrição: ${task.description}`));
}