import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserThumbailComponent } from './user-thumbail.component';

describe('UserThumbailComponent', () => {
  let component: UserThumbailComponent;
  let fixture: ComponentFixture<UserThumbailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserThumbailComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('it should emit id af user', () => {
    let emittedValue: number = NaN;
    component.deletedEvent.subscribe((userId: number) => emittedValue = userId)
    console.log(emittedValue);
    expect(emittedValue).toBeNaN();
  })

});
