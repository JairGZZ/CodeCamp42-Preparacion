import { Task } from "./Task.ts";
import { TaskService } from "./TaskService.ts";


const service = new TaskService();
service.ListTasks;

const task = new Task(1, "aprender ts", false);
const task1 = new Task(1, "aprender ts", false);
const task2 = new Task(1, "aprender ts", false);
const task3 = new Task(3, "aprender ts", false);

service.AddTask(task);
service.AddTask(task1);
service.AddTask(task2);
let lenght = service.AddTask(task3);

console.log(lenght);
service.ListTasks();

service.DeleteTask(3);
service.ListTasks();
