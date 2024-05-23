import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authenicationGuard } from './authenication.guard';

describe('authenicationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authenicationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
