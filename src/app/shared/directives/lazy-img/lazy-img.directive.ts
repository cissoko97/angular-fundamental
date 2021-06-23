import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyImg]'
})
export class LazyImgDirective {

  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const support = 'loading' in HTMLImageElement.prototype;
    if (support) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }

}
