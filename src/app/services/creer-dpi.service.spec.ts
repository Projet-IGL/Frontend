import { TestBed } from '@angular/core/testing';

import { CreerDPIService } from './creer-dpi.service';

describe('CreerDPIService', () => {
  let service: CreerDPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreerDPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
