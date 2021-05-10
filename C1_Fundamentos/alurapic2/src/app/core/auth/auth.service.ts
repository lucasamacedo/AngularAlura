import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TokenService } from './../token/token.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  authenticate(userName: string, password: string): Observable<Object>{
    return this.http
    .post(
      API_URL + '/user/login',
      { userName, password },
      { observe: 'response' }
      )
    .pipe(tap(res => {
      const authToken = res.headers.get('x-access-token');
      if (authToken != null){
        this.tokenService.setToken(authToken);
      }
      console.log(authToken);
    }));
  }
}
