import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../../service/user/user.service';

@Injectable()
export class UserDetailResolver implements Resolve<boolean> {

  constructor(private _userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._userService.getUserById(+route.params['id']).pipe(map(res => res));
  }
}
