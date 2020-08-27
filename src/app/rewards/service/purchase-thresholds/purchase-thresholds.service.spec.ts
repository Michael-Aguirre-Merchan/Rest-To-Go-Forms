import { TestBed } from '@angular/core/testing';

import { PurchaseThresholdsService } from './purchase-thresholds.service';

describe('PurchaseThresholdsService', () => {
  let service: PurchaseThresholdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseThresholdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
