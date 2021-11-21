import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IGeo } from '../../models';
import { UserService } from '../../service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IGeo[]> {

  constructor(private userService: UserService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGeo[]> {
    return this.userService.getGeoPosition().pipe(tap(() => { }), map(data => data));
  }
}
