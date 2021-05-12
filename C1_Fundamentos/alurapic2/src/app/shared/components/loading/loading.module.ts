import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartWithPipe } from './loading-pipe';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    LoadingComponent,
    StartWithPipe
  ],
  exports: [
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoadingModule {

}
