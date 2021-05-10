import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoModule } from './../photo/photo.module';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    PhotoModule
  ]
})
export class PhotoFormModule {}
