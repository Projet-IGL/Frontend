import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { infermierGuard } from './infermier.guard';

describe('infermierGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => infermierGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
