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
      title: 'Сделать домашнее задание',
      priority: TaskPriority.HIGHT,
      assignee: 'Me',
      done: false,
      estimathion: 3,
      description: 'Написать и скинуть "Y"',
      tags: ['front-ed']
    },
    {
      title: 'Сделать домашнее задание',
      priority: TaskPriority.HIGHT,
      assignee: 'Me',
      done: false,
      estimathion: 3,
      description: 'Написать и скинуть "Y"',
      tags: ['front-ed']
    },
    {
      title: 'Сделать домашнее задание',
      priority: TaskPriority.HIGHT,
      assignee: 'Me',
      done: false,
      estimathion: 3,
      description: 'Написать и скинуть "Y"',
      tags: ['front-ed']
    }
  ];
  constructor() { }
  
}
