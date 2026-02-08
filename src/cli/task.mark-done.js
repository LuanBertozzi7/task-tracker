import { loadTasks, saveTasks } from '../../utilities/tasks.create.js';

export function taskDone(idString) {
  const id = Number(idString);
  const tasks = loadTasks();
  const task = tasks.find((t) => Number(t.id) === id);
  const newStatus = 'concluida';

  if (!Number.isInteger(id)) {
    console.log('ID inválido');
    return;
  }

  task.status = newStatus;
  saveTasks(tasks);
}
