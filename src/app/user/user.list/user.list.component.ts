import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Level } from '../enum/level.enum';
import { Ball, IGeo, IUser } from '../models';
import { UserService } from '../service/user/user.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './user.list.component.html',
  animations: [
    trigger('userThumbail', [
      transition('void => *', [
        // initiale state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate('50ms', style({
          opacity: 0,
          height: 0,
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        })),
        animate(100)
      ]),
      transition('* => void',
        [
          animate(50, style({
            transform: 'scale(1.05)'
          })),
          // then scale down back to normal size while beginnind to fade
          animate(50, style({
            transform: 'scale(1)',
            opacity: 0.7
          })),
          // Scale down and fade out completely
          animate('150ms ease-out', style({
            opacity: 0,
            transform: 'scale(0.68)'
          })),
          // then animate the spacing (which includes heigth , margin and padding)
          animate('200ms ease-out', style({
            height: 0,
            'margin-bottom': 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
          }))
        ])
    ]),
    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class UserListComponent implements OnInit, OnDestroy, OnChanges {
  ball: Ball = new Ball();
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
    this.ball.id = 10;
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
    const index = this.userList.findIndex((value:IUser)  => value.id === id);
    this.userList.splice(index , 1);
    this.orderDeveloper();
  }
}
