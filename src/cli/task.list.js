import { loadTasks } from '../../utilities/tasks.create.js';

export function TaskList(statusString) {
  const tasks = loadTasks();
  const tasksTarget = tasks.filter((t) => t.status == statusString) ?? null;

  // treatment
  const valid = new Set(['concluida', 'andamento']);
  const status = String(statusString ?? '')
    .trim()
    .toLowerCase();
  if (!valid.has(status)) {
    console.log('forneça um status válido! (concluida - andamento)');
    return;
  }
  if (tasks.length === 0) {
    console.log('Lista vazia.');
    return;
  }

  if (!statusString) {
    // returns the entire list
    tasks.forEach((task) => console.log(`[${task.id}] - (${task.status}) - ${task.description}`));
    return;
  }

  tasksTarget.forEach((task) =>
    console.log(`[${task.id}] - (${task.status}) - ${task.description}`)
  );
}
