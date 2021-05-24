import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent, UserThumbailComponent, UserDetailComponent, UserCreateComponent, UserService, RouteActivedGuard, UserListResolver, Component404Component, NavbarComponent } from './user';

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, RouteActivedGuard,
    { provide: 'canDeactivateCreateUser', useValue: checkDirtyState },
    UserListResolver
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
