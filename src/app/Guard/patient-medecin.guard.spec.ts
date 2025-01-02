import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { patientMedecinGuard } from './patient-medecin.guard';

describe('patientMedecinGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => patientMedecinGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
