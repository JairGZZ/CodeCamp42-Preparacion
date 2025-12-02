import { TaskService} from "./TaskService.js";

let service = new TaskService();

service.AddTask("Comprar pan");
service.AddTask("Estudiar JavaScript");
service.AddTask("Hacer ejercicio");

service.ListTask();

service.CompleteTask(1);

service.ListTask();

service.DeleteTask(0);

service.ListTask();