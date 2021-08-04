import { Component, OnInit } from '@angular/core';
import { TaskPriority } from '../../models/task-priority.enum';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent{
  
  tasks: Task[]=[
    {
      title: 'Сделать дз',
      priority: TaskPriority.HIGHT,
      assignee: 'Me',
      status: false,
      estimathion: 3,
      description: 'Написать и скинуть "Y"',
      tags: ['front-ed']
    },
    {
      title: 'Сделать',
      priority: TaskPriority.HIGHT,
      assignee: 'Not me',
      status: true,
      estimathion: 5,
      description: 'Написать и скинуть "Y"',
      tags: ['front-ed']
    },
    {
      title: 'Покормить собаку',
      priority: TaskPriority.HIGHT,
      assignee: 'Parents',
      status: false,
      estimathion: 1,
      description: 'Написать и скинуть "Y"',
      tags: ['Быт']
    }
  ];
  constructor() {}

  sortTasks(){
    return this.tasks.sort((a) => a.status ? 1 : -1);
  }
   
  deleteTasks(task: Task){
    this.tasks = this.tasks.filter(el => el !== task);
  }
}
