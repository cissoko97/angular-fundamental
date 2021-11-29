import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Level } from '../enum/level.enum';
import { IUser } from '../models';

@Component({
  selector: 'app-user-thumbail',
  templateUrl: './user-thumbail.component.html',
  styleUrls: ['./user-thumbail.component.scss']
})
export class UserThumbailComponent implements OnInit {

  @Output() deletedEvent!: EventEmitter<number>;
  readonly LEVEL = Level;
  @Input() user!: IUser;

  constructor() {
    this.deletedEvent = new EventEmitter(true);
  }

  ngOnInit(): void {

  }
}
