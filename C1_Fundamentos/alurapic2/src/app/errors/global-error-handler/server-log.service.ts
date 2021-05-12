import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ServerLog } from './server-log';
import { environment } from 'src/environments/environment';

const API = 'http://localhost:7000';

@Injectable({ providedIn: 'root' })
export class ServerLogService {

  constructor(private http: HttpClient) {}

  log(serverLog: ServerLog): Observable<Object> {

    return this.http.post(API + '/infra/log', serverLog);
  }
}
