import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user/user.service';

@Injectable()
export class RouteActivedGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

 async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const res = await this.userService.getUserById(+route.params['id'])

    if (!res) {
      return this.router.navigate(['/404']);
    }
    return true;
  }
}
