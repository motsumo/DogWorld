import { TestBed } from '@angular/core/testing';

import { BreedsService } from './breeds.service';

describe('BreedService', () => {
  let service: BreedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
