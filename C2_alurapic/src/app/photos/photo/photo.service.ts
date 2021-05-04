<<<<<<< HEAD
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from './photo';
>>>>>>> a4e90393 (Adicionando interface Photo)

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
<<<<<<< HEAD

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/flavio/photos');       
    }
=======
  constructor(private http: HttpClient) {}

  listFromUser(userName: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(API + '/flavio/photos');
  }
>>>>>>> a4e90393 (Adicionando interface Photo)
}
