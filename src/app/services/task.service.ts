import { Task } from './../models/Task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() {
    this.tasks = [

    ]
   }

   getTask(){
      if (localStorage.getItem('tasks') === null) {
      return this.tasks;
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
      return this.tasks;
    }
  }

  addTask(task: Task){
    this.tasks.push(task);
    let tasks: Task[] = [];
    if (localStorage.getItem('tasks') === null) {
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]');
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  deleteTask(task: Task){
    for (let index = 0; index < this.tasks.length; index++) {
      if (task == this.tasks[index]) {
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
    }
  }
}
