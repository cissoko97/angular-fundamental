import { ElementRef, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyImgDirective } from './lazy-img.directive';



describe('LazyImgDirective', () => {
  let directive: LazyImgDirective;
  let nativeElement: ElementRef<HTMLImageElement>;
  beforeEach(() => {
    // let nativeElement: jasmine.SpyObj<ElementRef<HTMLImageElement>> = (new HTMLImageElement()).;
    nativeElement = new ElementRef<HTMLImageElement>(new HTMLImageElement());
    directive = new LazyImgDirective(nativeElement);


  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
