import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { SimpleModal } from './simpleModal.component';
import { TriggerModalDirective } from './directives/trigger-modal/trigger-modal.directive';
import { ReadEnumPipe } from './pipes/read-enum/read-enum.pipe';
import { ValidatorDirective } from './directives/validator/validator.directive';

@NgModule({
  declarations: [
    SimpleModal,
    TriggerModalDirective,
    ReadEnumPipe,
    ValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SimpleModal,
    TriggerModalDirective,
    ValidatorDirective,
    ReadEnumPipe
  ],
})
export class SharedModule { }
