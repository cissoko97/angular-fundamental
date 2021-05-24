import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCreateComponent } from './create-profile/create-profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileCreateComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
