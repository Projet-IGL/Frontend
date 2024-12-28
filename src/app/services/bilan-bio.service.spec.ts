import { TestBed } from '@angular/core/testing';

import { BilanBioService } from './bilan-bio.service';

describe('BilanBioService', () => {
  let service: BilanBioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilanBioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
