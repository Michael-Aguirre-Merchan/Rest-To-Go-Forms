import { TestBed } from '@angular/core/testing';

import { LocationHoursService } from './location-hours.service';

describe('LocationHoursService', () => {
  let service: LocationHoursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationHoursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
