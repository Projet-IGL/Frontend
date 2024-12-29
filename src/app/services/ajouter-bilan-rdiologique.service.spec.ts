import { TestBed } from '@angular/core/testing';

import { AjouterBilanRdiologiqueService } from './ajouter-bilan-rdiologique.service';

describe('AjouterBilanRdiologiqueService', () => {
  let service: AjouterBilanRdiologiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterBilanRdiologiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
