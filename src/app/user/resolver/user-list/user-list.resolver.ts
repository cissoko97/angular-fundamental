import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Subject } from 'rxjs';
import { ObservableInput } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { IUser } from '../../models';
import { UserService } from '../../service/user/user.service';

@Injectable()
export class UserListResolver implements Resolve<boolean> {
  constructor(private _userService: UserService) {

  }

  // catchError((err, d: Observable<IUser[]>): ObservableInput<any> => { return new Subject() })

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._userService.getUSer()
      .pipe(map(data => data));
  }

}
