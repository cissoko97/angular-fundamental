import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UserService } from '../../service/user/user.service';

import { UserListResolver } from './user-list.resolver';

describe('UserListResolver', () => {
  let resolver: UserListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserService, UserListResolver]
    });
    resolver = TestBed.inject(UserListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
