import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { JQUERY_TOKEN } from 'src/app/components';

@Directive({
  selector: '[appTriggerModal]'
})
export class TriggerModalDirective implements OnInit {

  @Input('appTriggerModal') modalId!: string;
  private el: HTMLElement;

  constructor(ref: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      setTimeout(() => {
        this.$(`#${this.modalId}`).modal('show');
      }, 200);
    })
  }
}
