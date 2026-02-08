import { loadTasks, saveTasks } from "../../utilities/tasks.create.js";



export function taskDeleteCli(id) {
  const tasks = loadTasks();
  const newTasks = tasks.filter((task) => task.id !== Number(id));

  if (tasks.length  === newTasks.length) {
    console.log(`task com o id ${id}, não existe...`);
    return;
  }

  saveTasks(newTasks);
  console.log(`Task ${id} deletada com sucesso!`);
}