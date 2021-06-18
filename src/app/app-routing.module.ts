import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component404Component } from './components';
import { RouteActivedGuard, UserCreateComponent, UserDetailComponent, UserListComponent, UserListResolver } from './user';
import { UserDetailResolver } from './user/resolver/user-detail/user-detail.resolver';

const routes: Routes = [
  {
    path: 'user', component: UserListComponent, resolve: {
      data: UserListResolver
    }
  },
  { path: 'user/new', component: UserCreateComponent, canDeactivate: ['canDeactivateCreateUser'] },
  {
    path: 'user/:id', component: UserDetailComponent, canActivate: [RouteActivedGuard], resolve: {
      data: UserDetailResolver
    }
  },
  { path: '404', component: Component404Component },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', redirectTo: '404',  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
