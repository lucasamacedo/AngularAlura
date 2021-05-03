import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos: any[] = [];
  constructor(http: HttpClient){
    http
      .get<any[]>('http://localhost:3000/flavio/photos')
      .subscribe(photos => this.photos = photos, err => console.log(err));
  }
}
