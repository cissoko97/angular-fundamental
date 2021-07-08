import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UserService } from '../../service/user/user.service';

import { UserDetailResolver } from './user-detail.resolver';

describe('UserDetailResolver', () => {
  let resolver: UserDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService, UserDetailResolver]
    });
    resolver = TestBed.inject(UserDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
