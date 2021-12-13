import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleModal } from './simpleModal.component';
import { TriggerModalDirective } from './directives/trigger-modal/trigger-modal.directive';
import { ReadEnumPipe } from './pipes/read-enum/read-enum.pipe';
import { ValidatorDirective } from './directives/validator/validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data/data.service';
import { LazyImgDirective } from './directives/lazy-img/lazy-img.directive';

@NgModule({
  declarations: [
    SimpleModal,
    TriggerModalDirective,
    ReadEnumPipe,
    ValidatorDirective,
    LazyImgDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleModal,
    TriggerModalDirective,
    ValidatorDirective,
    ReadEnumPipe,
    LazyImgDirective,
  ], providers: [
    DataService
  ]
})
export class SharedModule { }
