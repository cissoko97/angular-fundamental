import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserService } from '../../service/user/user.service';

import { RouteActivedGuard } from './route-actived.guard';

describe('RouteActivedGuard', () => {
  let guard: RouteActivedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService, Router, RouteActivedGuard]
    });
    guard = TestBed.inject(RouteActivedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
