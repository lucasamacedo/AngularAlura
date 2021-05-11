import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoModule } from './../photo/photo.module';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
    PhotoOwnerOnlyDirective
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
  ]
})
export class PhotoDetailsModule {

}
