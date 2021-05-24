import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
})
export class UserCreateComponent {

  isDirty: boolean = true;

  constructor(private router: Router) {

  }

  cancel(): void {
    this.router.navigate(['/user']);
  }
}
