import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subject } from 'rxjs';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './user.list.component.html',
})
export class UserListComponent implements OnInit {
  userList: any;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userList = this.route.snapshot.data['data'];
  }

}

