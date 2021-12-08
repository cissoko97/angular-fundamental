import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent, UserThumbailComponent, UserDetailComponent, UserCreateComponent, UserService, RouteActivedGuard, UserListResolver, UserDetailResolver, VotesService } from './user';
import { AuthService } from './profile/service/authService';
import { Component404Component, NavbarComponent, JQUERY_TOKEN } from './components';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './shared/service/data/data.service';
import { SharedModule } from './shared';
import { GuceTableModule } from 'fisrt-lib/projects/guce-table/src/public-api';


const jQuery = window['$' as any];
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
    GuceTableModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { dataEncapsulation: false }),
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


export function checkDirtyState(component: UserCreateComponent): boolean {
  if (component.formDeveloper.dirty) {
    return window.confirm('You have not saved this user, do you really want to cancel');
  }
  return true;
}
