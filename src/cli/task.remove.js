import { loadTasks, saveTasks } from '../../utilities/tasks.create.js';

export function TaskDelete(id) {
  const tasks = loadTasks();
  const newTasks = tasks.filter((task) => task.id !== Number(id));

  if (tasks.length === newTasks.length) {
    console.log(`Tarefa com o id ${id}, não existe...`);
    return;
  }

  saveTasks(newTasks);
  console.log(`Tarefa de ID ${id} deletada com sucesso!`);
}
