import { loadTasks, saveTasks } from '../../utilities/tasks.create.js';

export function taskProgress(idString) {
  const id = Number(idString);
  const newStatus = 'andamento';

  const tasks = loadTasks();
  const task = tasks.find((t) => Number(t.id) === id);

  task.status = newStatus;
  saveTasks(tasks);
  console.log(tasks);
}
