import { saveTasks, loadTasks } from '../../utilities/tasks.create.js';

function nextId(tasks) {
  const list = Array.isArray(tasks) ? tasks : [];
  const max = list.reduce((acc, t) => Math.max(acc, Number(t.id) || 0), 0);
  return max + 1;
}

export function addTask(description) {
  const desc = String(description || '').trim();
  if (!desc) throw new Error('A descrição da task é obrigatória! (task-cli.js add <description>');

  const tasks = loadTasks();
  const data = new Date();
  const now = data.toISOString().split('T')[0]; // YYYY-MM-DD

  const task = {
    id: nextId(tasks),
    description: desc,
    status: 'todo',
    createdAt: now,
    updateAt: now,
  };

  tasks.push(task);
  saveTasks(tasks);
  return task;
}
