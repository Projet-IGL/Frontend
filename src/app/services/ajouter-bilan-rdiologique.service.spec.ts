import { TestBed } from '@angular/core/testing';

import { AjouterBilanRadiologiqueService } from './ajouter-bilan-rdiologique.service';

describe('AjouterBilanRdiologiqueService', () => {
  let service: AjouterBilanRadiologiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterBilanRadiologiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
