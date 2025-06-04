import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { quitterLoginGuard } from './quitter-login.guard';

describe('quitterLoginGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => quitterLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
