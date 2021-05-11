import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Photo } from '../photo/photo';
import { PhotoComment } from '../photo/photo-comment';
import { PhotoService } from './../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit{

  photo$: Observable<Photo> = new Observable<Photo>();
  photoId = -1;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
  }


}
