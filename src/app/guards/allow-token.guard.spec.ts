import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { allowTokenGuard } from './allow-token.guard';

describe('allowTokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => allowTokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
