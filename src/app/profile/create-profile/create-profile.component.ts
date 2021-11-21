import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/user';
import { AuthService } from '../service/authService';

@Component({
  selector: 'app-profile-create',
  templateUrl: './create-profile.component.html',
})
export class ProfileCreateComponent implements OnInit {

  profileForm!: FormGroup;
  loginMouseOver = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {

    const authenticateUser = this.authService.currentUser;
    this.profileForm = this.fb.group({
      firstname: [{ value: authenticateUser?.username || null, disabled: false }, [Validators.required, Validators.maxLength(10)]],
      lastname: [{ value: authenticateUser?.lastname || null, disabled: false }, [Validators.required, Validators.maxLength(10)]],
    });
  }

  updateProfil(data: IUser): void {
    console.log(data);
  }

  mouseEvent(event: Event, status: boolean): void {
    this.loginMouseOver = status;
  }

  cancel(): void {
    this.router.navigate(['/user']);
  }


  validateFirstName(): boolean {
    return (this.profileForm.get('firstname')?.valid || this.profileForm.get('firstname')?.untouched) as boolean;
  }

  validateLastName(): boolean {
    return (this.profileForm.get('lastname')?.valid || this.profileForm.get('lastname')?.untouched) as boolean;
  }
}
