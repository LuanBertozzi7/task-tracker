import { loadTasks } from '../../utilities/tasks.create.js';

export function TaskList(statusString) {
  const tasks = loadTasks();
  const tasksTarget = tasks.filter((t) => t.status == statusString) ?? null;
  
  // treatment
  if (tasks.length === 0) {
    console.log('Lista vazia.');
    return;
  }
  
  if (!statusString) { // returns the entire list
    tasks.forEach((task) => console.log(`ID:[${task.id}]\n descrição: '${task.description}'\n status: ${task.status}`));
    return;
  }

  tasksTarget.forEach((task) => console.log(`ID: [${task.id}]\n descrição: '${task.description}'\n status: ${task.status}`));
}
