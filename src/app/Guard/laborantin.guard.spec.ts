import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { laborantinGuard } from './laborantin.guard';

describe('laborantinGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => laborantinGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
