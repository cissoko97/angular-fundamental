import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../models/user";
import { UserService } from "../service/user/user.service";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  user: any;

  constructor(private activateRouter: ActivatedRoute,
    private userService: UserService) {
    this.userService.getUserById(parseInt(this.activateRouter.snapshot.params['id']))
      .subscribe((res) => {
        this.user = res;
      })
  }

  ngOnInit() {

  }
}
