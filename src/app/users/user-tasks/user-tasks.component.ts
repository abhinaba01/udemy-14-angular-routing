import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  // private usersService = inject(UsersService);


  message = input.required<string>();
  private activatedRoute = inject(ActivatedRoute);


  ngOnInit(){
    this.activatedRoute.data.subscribe({   // this returns an observable  that emits a value when the route value changes or a new dynamic value is emitted.
      next: data =>{
        console.log(data)
      }
    })
  }

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );
  // ngOnInit() {
  //   console.log('Message:', this.message());
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';
  return userName;
};
