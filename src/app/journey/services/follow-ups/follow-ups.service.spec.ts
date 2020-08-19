import { TestBed } from '@angular/core/testing';

import { FollowUpsService } from './follow-ups.service';

describe('FollowUpsService', () => {
  let service: FollowUpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowUpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
