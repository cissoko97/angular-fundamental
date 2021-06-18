import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent, UserThumbailComponent, UserDetailComponent, UserCreateComponent, UserService, RouteActivedGuard, UserListResolver, UserDetailResolver, VotesService } from './user';
import { AuthService } from './profile/service/authService';
import { SharedModule } from './shared/shared.module';
import { Component404Component, NavbarComponent, JQUERY_TOKEN } from './components';

// declare var $: any;

let jQuery = window['$' as any]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    UserThumbailComponent,
    UserDetailComponent,
    UserCreateComponent,
    Component404Component
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    VotesService,
    RouteActivedGuard,
    { provide: 'canDeactivateCreateUser', useValue: checkDirtyState },
    { provide: JQUERY_TOKEN, useValue: jQuery },
    AuthService,
    UserListResolver,
    UserDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: UserCreateComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this user, do you really want to cancel')
  }
  return true;
}
