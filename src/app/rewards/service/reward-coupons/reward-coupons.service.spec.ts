import { TestBed } from '@angular/core/testing';

import { RewardCouponsService } from './reward-coupons.service';

describe('RewardCouponsService', () => {
  let service: RewardCouponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RewardCouponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
