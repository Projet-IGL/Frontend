import { TestBed } from '@angular/core/testing';

import { AjouterBilanBiologiqueService } from './ajouter-bilan-biologique.service';

describe('AjouterBilanBiologiqueService', () => {
  let service: AjouterBilanBiologiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterBilanBiologiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
