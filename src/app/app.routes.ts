import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { userRoutes } from './users/users.route';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // :userId means it is a dymanic path
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello',
    },
    resolve: {
      userName: resolveUserName,
    },
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
