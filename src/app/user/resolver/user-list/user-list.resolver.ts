import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../..';
import { UserService } from '../../service/user/user.service';

@Injectable()
export class UserListResolver implements Resolve<IUser[]> {
  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> {
    return this.userService.getUSer()
      .pipe(map(data => data));
  }

}
