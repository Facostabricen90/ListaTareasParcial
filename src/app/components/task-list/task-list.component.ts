import { ApiJSONplaceholderService } from './../../services/api-jsonplaceholder.service';
import { Task } from './../../models/Task';
import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks!: Task[];


  constructor(
    public taskService: TaskService,
    private service: ApiJSONplaceholderService
  ){
  }

  trendingMovieResult: any = [];

  ngOnInit(){
    this.tasks = this.taskService.getTask();
    this.trendingData();
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'Trending Movies');
      this.trendingMovieResult = result;
    })
  }
}
