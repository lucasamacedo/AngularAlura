import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]): any[]{
    const newRows: any[] = [];
    for(let i = 0; i < photos.length; i += 3){
      newRows.push(photos.slice(i, i + 3));
    }
    return newRows;
  }

}
