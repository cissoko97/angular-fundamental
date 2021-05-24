import { TestBed } from '@angular/core/testing';

import { RouteActivedGuard } from './route-actived.guard';

describe('RouteActivedGuard', () => {
  let guard: RouteActivedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteActivedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
