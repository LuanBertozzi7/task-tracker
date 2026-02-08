/**
 * @author LuanBertozzi7
 * @version 0.0.1b
 */

import { taskFileCreate } from '../utilities/tasks.create.js';
taskFileCreate();
import {command, args } from '../src/core/task.args.js';
// cli functions 
import { taskAddCli } from '../src/cli/task.add.js';


try {
  switch (command) {
    case 'add': {
      taskAddCli(args);
      break;
    }
    default:
      console.log('invalid command, use: add | list | update | delete | mark-in-progress');
  }
} catch (e) {
  console.error(String(e.message || e));
  process.exitCode = 1;
}
