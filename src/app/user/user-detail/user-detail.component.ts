import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";
import { IUser } from "../models/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  user!: IUser;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.data.subscribe((data: Data) => {
      this.user = data['developer'];
    });
  }
}
