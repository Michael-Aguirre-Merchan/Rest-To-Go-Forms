import { TestBed } from '@angular/core/testing';

import { CompanyKeysService } from './company-keys.service';

describe('CompanyKeysService', () => {
  let service: CompanyKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
