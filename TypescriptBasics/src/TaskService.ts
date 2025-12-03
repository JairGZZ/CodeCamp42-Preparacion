import { Task } from "./Task.ts";

export class TaskService {
  private taskList = new Array<Task>();

  public AddTask(task: Task): number {
    const a = this.taskList.push(task);
    return a;
  }
  public DeleteTask(id: number): void {
    const index = this.taskList.findIndex((task, index) => {
      console.log("Estoy revisando el índice:", index);
      return task.id === 10;
    });
    this.taskList.splice(index, 1);
  }

  public ListTasks() {
    for (const elemente of this.taskList) {
      console.log(elemente);
    }
  }

  public CompletedTask(id:number){
    const task = this.taskList

  }
}

