import fs from "node:fs";
import path from "node:path";

const TASK_FILE = path.join(process.cwd(), "./tasks-file.json");

export function taskFileCreate() {
  try {
    if (!fs.existsSync(TASK_FILE)) {
      fs.writeFileSync(TASK_FILE, JSON.stringify([], null, 2), "utf-8");
      console.log("task's file created");
    }
  } catch (e) {
    console.log("problems with creating task's file");
    console.log(e);
  }
}
