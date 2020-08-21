import { TestBed } from '@angular/core/testing';

import { FbKeysService } from './fb-keys.service';

describe('FbKeysService', () => {
  let service: FbKeysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FbKeysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
