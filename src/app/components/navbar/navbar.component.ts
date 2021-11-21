import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/profile/service/authService';
import { UserService } from 'src/app/user';
import { IUser } from 'src/app/user/models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [``]
})
export class NavbarComponent implements OnInit {
  foundUser!: IUser[];
  searchTerm = '';
  constructor(public auth: AuthService, private userService: UserService) {
  }

  onSearch(): void {
  }

  ngOnInit(): void {
    this.auth.isAuthenticated();
  }

  makeSearch(searchTerm: string): void {
    this.userService.searchUserByTerm(searchTerm)
      .subscribe(data => {
        this.foundUser = data;
      });
  }

}
