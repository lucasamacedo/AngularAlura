import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from './../user/user.service';


const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string): Observable<Object>{
    return this.http
    .post(
      API + '/user/login',
      { userName, password },
      { observe: 'response' }
      )
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      if (authToken != null){
        this.userService.setToken(authToken);
      }
    }));
  }
}
