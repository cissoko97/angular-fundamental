import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Data, Router } from "@angular/router";
import { Level } from "../enum/level.enum";
import { IUser } from "../models";
import { UserService } from "../service/user/user.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
})
export class UserCreateComponent implements OnInit {
  readonly LEVEL = Level;
  private inComingDev!: IUser;
  private isAnUpdate: boolean = false;
  formDeveloper!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.inComingDev = data['developer'] as IUser;
      this.isAnUpdate = true;
    })
    // ,
    this.formDeveloper = this.fb.group({
      name: [{ value: this.inComingDev?.name, disabled: false }, [Validators.required]],
      username: [{ value: this.inComingDev?.username, disabled: false }, [Validators.required]],
      email: [{ value: this.inComingDev?.email, disabled: false }, [Validators.required, Validators.email]],
      experience: [{ value: this.inComingDev?.experience || Level.junior, disabled: false }, [Validators.required]],
      reputation: [{ value: this.inComingDev?.reputation || 4, disabled: false }, [Validators.required]],
      company: this.fb.group({
        name: [{ value: this.inComingDev?.company?.name, disabled: false }, [Validators.required]],
        pharse: [{ value: this.inComingDev?.company?.pharse, disabled: false }, [Validators.required]],
        bs: [{ value: this.inComingDev?.company?.bs, disabled: false }, [Validators.required]],
      })
    });
    console.log('reputation {}', this.inComingDev?.reputation)

  }
  // , restrictedWord(['co', 'go', 'bo'])
  cancel(): void {
    this.router.navigate(['/user']);
  }

  public save(data: IUser): void {

    if (this.isAnUpdate) {
      data.id = this.inComingDev.id;

      this.userService.updateDeveloper(data)
        .subscribe((user: IUser) => {
          console.log(user);
          this.router.navigate(['/user', data?.id])
        })
      return;
    }

    this.userService.addDeveloper(data)
      .subscribe((developer: IUser) => {
        this.router.navigate(['/user']);
      });
  }

}
