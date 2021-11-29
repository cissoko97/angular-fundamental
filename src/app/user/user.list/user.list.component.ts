import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Level } from '../enum/level.enum';
import { IGeo, IUser } from '../models';
import { UserService } from '../service/user/user.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './user.list.component.html',
})
export class UserListComponent implements OnInit, OnDestroy, OnChanges {

  readonly LEVEL = Level;
  userList: IUser[] = [];
  geoList: IGeo[] = [];
  userToDisplay: IUser[] = [];
  filterBy = 'all';
  sortBy = 'name';
  private subscription: Subscription = new Subscription();
  constructor(private activateRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.sortBy = 'name';
    this.subscription.add(this.activateRoute.data.subscribe((data: Data) => {
      this.userList = data.developers;
      this.geoList = data.geos;
      this.userToDisplay = this.userList;
      this.orderDeveloper();
    }));

  }

  setSortBy(sort: string): void {
    this.sortBy = sort;
    this.orderDeveloper();
  }

  setfilterBy(filter: string): void {
    this.filterBy = filter;
    this.orderDeveloper();
  }

  private orderDeveloper(): void {
    if (this.filterBy.toLowerCase() === 'all') {
      this.userToDisplay = this.userList;
    }
    else {
      this.userToDisplay = this.userList.filter((user: IUser) => user.experience === this.filterBy);
    }

    if (this.sortBy === 'name') {
      this.userToDisplay = this.userToDisplay.sort((user1: IUser, user2: IUser) => user1.name < user2.name ? -1 : (user2.name === user2.name) ? 0 : 1);
    }
    else {
      this.userToDisplay = this.userToDisplay.sort((user1: IUser, user2: IUser) => user1.reputation - user2.reputation);
    }
  }

  async delete(id: number): Promise<void> {
    console.log(id);

    await this.userService.deleteDev(id).toPromise();
    this.userList = await this.userService.getUSer().toPromise() as IUser[];
    this.userToDisplay = this.userList;
    this.orderDeveloper();
  }
}
