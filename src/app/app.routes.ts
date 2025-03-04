import {
  CanMatchFn,
  RedirectCommand,
  RouteConfigLoadEnd,
  Router,
  Routes,
} from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { userRoutes } from './users/users.route';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess<0.5) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};
export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No Tasks Found',
  },
  {
    path: 'users/:userId', // :userId means it is a dymanic path
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [],
    data: {
      message: 'Hello',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
