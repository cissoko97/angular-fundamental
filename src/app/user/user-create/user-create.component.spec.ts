import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { UserService } from "../service/user/user.service";
import { UserCreateComponent } from "./user-create.component"
import {RouterTestingModule} from '@angular/router/testing';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [Router, FormBuilder, UserService, {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get(): string {
                return '123';
              },
            },
          },
        },
      },],
      declarations: [UserCreateComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('it should created form with to controls', () => {

    expect(component.formDeveloper.contains('name')).toBeTruthy();

  })

  it('should make the name control required', () => {

    let control = component.formDeveloper.get('name');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  })

  it('should make all field required', () => {
    let names = Object.keys(component.formDeveloper.controls).join(' - ');

    console.log(names);

  })
})
