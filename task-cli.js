import { taskFileCreate } from "./utilities/tasks.file.create.js";
taskFileCreate();

const args = process.argv.slice(2); // remove node and archive name
const [command, ...rest] = args;
