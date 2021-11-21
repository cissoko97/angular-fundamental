import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mouseOverLogin = false;
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(formValue: any): void {
    const form: NgForm = new NgForm([], []);
    this.authService.loginUser(formValue);
    this.router.navigate(['user']);
  }

  cancel(): void {
    this.router.navigate(['user']);
  }

  mouseEvent(event: Event, status: boolean): void {
    event.preventDefault();
    this.mouseOverLogin = status;
  }
}
