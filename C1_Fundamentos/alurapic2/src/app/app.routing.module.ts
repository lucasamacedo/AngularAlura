import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'user/:userName',
    pathMatch: 'full',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    data: {
      title: 'Timeline'
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Photo upload'
    }
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo details'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
