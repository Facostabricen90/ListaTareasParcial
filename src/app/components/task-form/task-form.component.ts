import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  constructor(
    public taskService: TaskService
  ) {

  }

  addTask(newTitle: any, newDescription: any) {
    console.log('adding', newTitle.value, newDescription.value);
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    })
    newTitle.value = '';
    newDescription.value = '';
    newTitle.focus();
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: newTitle.value,
        description: newDescription.value,
        hide: true
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    return false;
  }
}
