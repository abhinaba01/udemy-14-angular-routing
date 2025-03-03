import { Component, computed, inject, input, signal } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  userId = input.required<string>();
  order = signal<'asc' | 'desc'>('desc');
  // order?: 'asc'|'desc';
  private tasksService = inject(TasksService);
  private activatedRoute = inject(ActivatedRoute);
  userTasks = computed(() =>
    this.tasksService
      .allTasks()
      .filter((task) => task.userId === this.userId())
      .sort((a, b) => {
        if (this.order() === 'asc') {
          return a.id > b.id ? 1 : -1;
        } else {
          return a.id > b.id ? -1 : 1;
        }
      })
  );

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe({
      next: (params) => (this.order.set(params['order'])),
    });
  }
}
