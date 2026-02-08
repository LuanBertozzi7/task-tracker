/**
 * @author LuanBertozzi7
 * @version 0.0.2
 */

import { taskFileCreate } from '../utilities/tasks.create.js';
taskFileCreate();

import { command, rest, args} from '../src/core/task.args.js';
// cli functions 
import { TaskAdd } from '../src/cli/task.add.js';
import { TaskDelete } from '../src/cli/task.remove.js';
import { TaskList } from '../src/cli/task.list.js';
import { taskUpdate } from '../src/cli/task.update.js';




try {
  switch (command) {
    case 'add': {
      TaskAdd(...rest)
      break;
    }
    case 'delete': {
      TaskDelete(...rest);
      break;
    }
    case 'list': {
      TaskList();
      break;
    }
    case 'update': {
      taskUpdate(args);
      break;
    }
    default:
      console.log('comando inválido, help: add | list | update | delete | mark-in-progress');
  }
} catch (e) {
  console.error(String(e.message || e));
  process.exitCode = 1;
}
  