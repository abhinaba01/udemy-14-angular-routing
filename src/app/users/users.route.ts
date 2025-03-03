import { Routes } from "@angular/router";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { TasksComponent } from "../tasks/tasks.component";

export const userRoutes:Routes = [
      {
        path:'',
        redirectTo:'tasks',
        pathMatch:'prefix'
      },
      {
        path: 'tasks', // users/:usersId/tasks
        component: TasksComponent,
      },
      {
        path: 'tasks/new', // users/:usersId/tasks
        component: NewTaskComponent,
      },
    ]