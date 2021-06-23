import { ElementRef, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyImgDirective } from './lazy-img.directive';



describe('LazyImgDirective', () => {
  let nativeElement: jasmine.SpyObj<ElementRef<HTMLImageElement>>;
  it('should create an instance', () => {
    const directive = new LazyImgDirective(nativeElement);
    expect(directive).toBeTruthy();
  });
});
