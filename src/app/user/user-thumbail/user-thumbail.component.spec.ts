import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserThumbailComponent } from './user-thumbail.component';

describe('UserThumbailComponent', () => {
  let component: UserThumbailComponent;
  let fixture: ComponentFixture<UserThumbailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserThumbailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserThumbailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
