import { ApiJSONplaceholderService } from './../../services/api-jsonplaceholder.service';
import { TaskService } from './../../services/task.service';
import { Task } from './../../models/Task';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input()
  task!: Task;
  trendingMovieResult: any = [];

  constructor(
    public taskService: TaskService,
    private service: ApiJSONplaceholderService
  ){}

  deleteTask(task: Task){
    if (confirm('Are you sure you want to delete it?')) {
      this.taskService.deleteTask(task);
    }
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'Trending Movies');
      this.trendingMovieResult = result.results;
    })
  }
}
