import { saveTasks, loadTasks } from '../../utilities/tasks.create.js';
import { formatDateTask } from '../../utilities/date.js';

function nextId(tasks) {
  const list = Array.isArray(tasks) ? tasks : [];
  const max = list.reduce((acc, t) => Math.max(acc, Number(t.id) || 0), 0);
  return max + 1;
}

export function addTaskService(description) {
  const desc = String(description || '').trim();
  if (!desc) throw new Error('A descrição da tarefa é obrigatória! (add <description>');

  const tasks = loadTasks();

  const task = {
    id: nextId(tasks),
    description: desc,
    status: 'andamento',
    createdAt: formatDateTask(),
    updateAt: formatDateTask(),
  };

  tasks.push(task);
  saveTasks(tasks);
  return task;
}
