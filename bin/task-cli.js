/**
 * @author LuanBertozzi7
 * @version 0.0.2
 */

import { taskFileCreate } from '../utilities/tasks.create.js';
taskFileCreate();

import { command, rest } from '../src/core/task.args.js';
// cli functions 
import { taskAddCli } from '../src/cli/task.add.js';
import { taskDeleteCli } from '../src/cli/task.remove.js';
import { taskListCli } from '../src/cli/task.list.js';



try {
  switch (command) {
    case 'add': {
      taskAddCli(...rest)
      break;
    }
    case 'delete': {
      taskDeleteCli(...rest);
      break;
    }
    case 'list': {
      taskListCli();
      break;
    }
    default:
      console.log('invalid command, use: add | list | update | delete | mark-in-progress');
  }
} catch (e) {
  console.error(String(e.message || e));
  process.exitCode = 1;
}
