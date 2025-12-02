
import { Task } from "./Task.js";

export class TaskService {
  array = [];
  hola = 0;



  AddTask(title) {

    this.array.push(new Task(this.hola, title, false));
    this.hola++;
  }

  CompleteTask(id){

    let item = this.array.find(t => t.id === id)

    item.completed = true;
  }

  DeleteTask(id){
    const index =this.array.indexOf(t => t.id === id)
    this.array.splice(index,1)
  }



  ListTask() {
    console.log(this.array);
  }
}


