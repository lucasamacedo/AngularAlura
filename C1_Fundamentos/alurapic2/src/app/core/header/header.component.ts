import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';

import { UserService } from './../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<User> = new Observable<User>();
  user?: User;

  constructor(userService: UserService) {
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }
}
