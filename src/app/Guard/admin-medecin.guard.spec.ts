import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminMedecinGuard } from './admin-medecin.guard';

describe('adminMedecinGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminMedecinGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
