<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

=======
import { Component } from '@angular/core';
>>>>>>> a4e90393 (Adicionando interface Photo)
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit{

  
  photos: any[] = []; 
  
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    
      this.photoService
        .listFromUser('flavio')
        .subscribe(photos => this.photos = photos);
=======
export class AppComponent {
  photos: any[] = [];
  constructor(photoService: PhotoService){
    photoService
    .listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
>>>>>>> a4e90393 (Adicionando interface Photo)
  }
}
