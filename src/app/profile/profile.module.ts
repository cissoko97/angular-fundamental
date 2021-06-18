import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule, ProfileCreateComponent, LoginComponent } from './index';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ProfileCreateComponent
    , LoginComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers: []
})
export class ProfileModule { }
