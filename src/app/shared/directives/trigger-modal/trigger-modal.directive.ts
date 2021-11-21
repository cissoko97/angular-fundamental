import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    this.el.addEventListener('click', (e: Event) => {
      setTimeout(() => {
        this.$(`#${this.modalId}`).modal('show');
      }, 200);
    });
  }
}
