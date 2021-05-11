import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId = -1;

  comments$: Observable<PhotoComment[]> = new Observable<PhotoComment[]>();

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);
  }

}