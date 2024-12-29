import { TestBed } from '@angular/core/testing';

import { AjouterSoinService } from './ajouter-soin.service';

describe('AjouterSoinService', () => {
  let service: AjouterSoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterSoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
