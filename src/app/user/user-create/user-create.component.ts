import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { restrictedWord } from "../custom-validator/validator";
import { Level } from "../enum/level.enum";
import { IUser } from "../models";
import { UserService } from "../service/user/user.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
})
export class UserCreateComponent implements OnInit {
  readonly LEVEL = Level;

  isDirty: boolean = true;
  formDeveloper!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.formDeveloper = this.fb.group({
      name: [{ value: null, disabled: false }, [Validators.required]],
      username: [{ value: null, disabled: false }, [Validators.required]],
      email: [{ value: null, disabled: false }, [Validators.required, Validators.email]],
      experience: [{ value: Level.junior, disabled: false }, [Validators.required]],
      reputation: [{ value: 0, disabled: false }, [Validators.required]],
      company: this.fb.group({
        name: [{ value: null, disabled: false }, [Validators.required]],
        pharse: [{ value: null, disabled: false }, [Validators.required]],
        bs: [{ value: null, disabled: false }, [Validators.required]],
      })
    });
  }
  // , restrictedWord(['co', 'go', 'bo'])
  cancel(): void {
    this.router.navigate(['/user']);
  }

  public createUser(data: IUser): void {
    this.userService.addDeveloper(data)
      .subscribe((id: number) => {
        console.log(id);
        this.isDirty = !this.formDeveloper.valid
        this.router.navigate(['/user']);
      });
  }

}
