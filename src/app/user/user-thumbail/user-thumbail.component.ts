import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-thumbail',
  templateUrl: './user-thumbail.component.html',
  styleUrls: ['./user-thumbail.component.scss']
})
export class UserThumbailComponent implements OnInit {

  @Input() user: any;
  constructor() { }

  ngOnInit(): void {
  }

}
