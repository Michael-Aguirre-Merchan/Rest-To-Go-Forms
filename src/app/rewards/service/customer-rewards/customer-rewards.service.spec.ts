import { TestBed } from '@angular/core/testing';

import { CustomerRewardsService } from './customer-rewards.service';

describe('CustomerRewardsService', () => {
  let service: CustomerRewardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRewardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
