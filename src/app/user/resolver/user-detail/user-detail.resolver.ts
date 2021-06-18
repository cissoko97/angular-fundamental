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
    const id: number = +route.params['id'];
    return this._userService.getUserById(id).pipe(map(res => res));
  }
}