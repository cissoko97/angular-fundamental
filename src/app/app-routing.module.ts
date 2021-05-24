import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component404Component, RouteActivedGuard, UserCreateComponent, UserDetailComponent, UserListComponent, UserListResolver } from './user';

const routes: Routes = [
  {
    path: 'user', component: UserListComponent, resolve: {
      data: UserListResolver
    }
  },
  { path: 'user/new', component: UserCreateComponent, canDeactivate: ['canDeactivateCreateUser'] },
  { path: 'user/:id', component: UserDetailComponent, canActivate: [RouteActivedGuard] },
  { path: '404', component: Component404Component },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
