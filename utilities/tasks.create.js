import fs from 'node:fs';
import path from 'node:path';

export const TASK_FILE = path.join(process.cwd(), './storage/tasks-file.json');

export function taskFileCreate() {
  try {
    if (!fs.existsSync(TASK_FILE)) {
      fs.writeFileSync(TASK_FILE, JSON.stringify([], null, 2), 'utf-8');
      console.log('tasks file did not exist, so it was created at ', TASK_FILE);
    }
  } catch (e) {
    console.log("problems with creating task's file");
    console.log(e);
  }
}

export function saveTasks(tasks) {
  fs.writeFileSync(TASK_FILE, JSON.stringify(tasks, null, 2) + '\n', 'utf8');
}

export function loadTasks() {
  if (!fs.existsSync(TASK_FILE)) {
    taskFileCreate();
    return [];
  }

  const raw = fs.readFileSync(TASK_FILE, 'utf8').trim();
  if (!raw) return [];

  const data = JSON.parse(raw);
  return Array.isArray(data) ? data : [];
}
