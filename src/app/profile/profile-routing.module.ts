import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCreateComponent } from './create-profile/create-profile.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'new', component: ProfileCreateComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
