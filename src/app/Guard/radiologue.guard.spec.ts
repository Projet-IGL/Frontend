import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { radiologueGuard } from './radiologue.guard';

describe('radiologueGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => radiologueGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
