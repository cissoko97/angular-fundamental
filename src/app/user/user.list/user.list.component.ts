import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Level } from '../enum/level.enum';
import { IUser } from '../models';
import { UserService } from '../service/user/user.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './user.list.component.html',
})
export class UserListComponent implements OnInit {

  readonly LEVEL = Level;
  userList: IUser[] = [];
  userToDisplay: IUser[] = [];
  filterBy: string = 'all';
  sortBy: string = 'name';

  constructor(private activateRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.sortBy = 'name';
    this.activateRoute.data.subscribe((data: Data) => {
      this.userList = data['developers'];
      this.userToDisplay = this.userList;
      this.orderDeveloper();
    });
  }

  setSortBy(sort: string): void {
    this.sortBy = sort;
    this.orderDeveloper();
  }

  setfilterBy(filter: string): void {
    this.filterBy = filter;
    this.orderDeveloper();
  }

  private orderDeveloper() {
    if (this.filterBy.toLowerCase() === 'all')
      this.userToDisplay = this.userList;
    else
      this.userToDisplay = this.userList.filter((user: IUser) => user.experience === this.filterBy);

    if (this.sortBy === 'name')
      this.userToDisplay = this.userToDisplay.sort((user1: IUser, user2: IUser) => user1.name < user2.name ? -1 : (user2.name === user2.name) ? 0 : 1)
    else
      this.userToDisplay = this.userToDisplay.sort((user1: IUser, user2: IUser) => user1.reputation - user2.reputation)
  }

  async delete(id: number) {
    console.log(id);

    await this.userService.deleteDev(id).toPromise();
    this.userList = await this.userService.getUSer().toPromise()
    this.userToDisplay = this.userList;
    this.orderDeveloper();
  }
}
