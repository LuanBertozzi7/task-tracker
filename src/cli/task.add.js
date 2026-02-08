import { addTaskService } from '../core/task.service.js';

export function taskAdd(...rest) {
  const description = rest.join(' ');
  const task = addTaskService(description);
  console.log(`Tarefa adicionada! ID: ${task.id}`);
}
