import { loadTasks, saveTasks } from '../../utilities/tasks.create.js';

export function taskUpdate(cmd) {
  console.log(cmd);
  const [idString, ...rest] = cmd.slice(1);
  const id = Number(idString); // convert id
  const newDescription = rest.join(' ').trim();

  // treatment
  if (!Number.isInteger(id)) {
    console.log('ID inválido');
    return;
  }
  if (!newDescription) {
    console.log('faltou nova descrição...');
    return;
  }

  const tasks = loadTasks();
  const task = tasks.find((t) => Number(t.id) === id);

  if (!task) {
    console.log(`Tarefa com o ID ${id} não encontrado!`);
    return;
  }

  task.description = newDescription;
  task.updateAt = new Date().toISOString().slice(0, 10);

  saveTasks(tasks);
  console.log('Atualizada:', task);
}
