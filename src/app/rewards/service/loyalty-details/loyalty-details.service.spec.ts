import { TestBed } from '@angular/core/testing';

import { LoyaltyDetailsService } from './loyalty-details.service';

describe('LoyaltyDetailsService', () => {
  let service: LoyaltyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoyaltyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
