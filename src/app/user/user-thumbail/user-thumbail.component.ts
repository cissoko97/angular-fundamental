import { Component, Input, OnInit } from '@angular/core';
import { Level } from '../enum/level.enum';
import { IUser } from '../models';

@Component({
  selector: 'app-user-thumbail',
  templateUrl: './user-thumbail.component.html',
  styleUrls: ['./user-thumbail.component.scss']
})
export class UserThumbailComponent implements OnInit {
  readonly LEVEL = Level;
  @Input() user!: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
