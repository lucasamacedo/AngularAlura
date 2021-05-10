import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';

import { UserService } from './../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<User | null> = new Observable<User | null>();

  constructor(
    private userService: UserService,
    private router: Router) {
    this.user$ = userService.getUser();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
