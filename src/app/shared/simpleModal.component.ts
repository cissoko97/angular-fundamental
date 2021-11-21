import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { JQUERY_TOKEN } from '../components';

@Component({
  selector: 'app-simple-modal',
  template: `<div [id]="elementId" #ModalContainer class="modal fade" aria-hidden="true" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="simple-modal-label">
            {{title}}
          </h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body" (click)="closeModal()" >
          <ng-content></ng-content>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`,
  styles: [`
  .modal-body{ height:250px ;overflow-y:scroll}`]
})
export class SimpleModal {

  @Input() title = '';
  @Input() elementId = '';
  @Input() closeOnBodyClick = true;
  @ViewChild('ModalContainer') container!: ElementRef;

  constructor(@Inject(JQUERY_TOKEN) private $: any) {

  }

  closeModal(): void {
    if (this.closeOnBodyClick) {
      this.$(this.container.nativeElement).modal('hide');
    }
  }
}
