import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StartWithPipe } from './loading-pipe';
import { LoadingComponent } from './loading.component';
import { LoadingInterceptor } from './loading.interceptor';

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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }]
})
export class LoadingModule {

}
