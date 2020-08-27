import { TestBed } from '@angular/core/testing';

import { LoyaltyTiersService } from './loyalty-tiers.service';

describe('LoyaltyTiersService', () => {
  let service: LoyaltyTiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoyaltyTiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
