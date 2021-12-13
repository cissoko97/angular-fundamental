import { NgModule } from '@angular/core';
import { ProfileRoutingModule, ProfileCreateComponent, LoginComponent } from './index';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ProfileCreateComponent,
    LoginComponent
  ],
  imports: [
    ProfileRoutingModule,
    SharedModule
  ],
  providers: []
})
export class ProfileModule { }
