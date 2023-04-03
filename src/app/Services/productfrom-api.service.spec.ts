import { TestBed } from '@angular/core/testing';

import { ProductfromApiService } from './productfrom-api.service';

describe('ProductfromApiService', () => {
  let service: ProductfromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductfromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
