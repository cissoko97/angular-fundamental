import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../../service/user/user.service';

@Injectable()
export class RouteActivedGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const res = await this.userService.getUserById(+route.params['id']).toPromise()

    if (res) {
      return true;
    }
    return await this.router.navigate(['/404']);
  }
}
