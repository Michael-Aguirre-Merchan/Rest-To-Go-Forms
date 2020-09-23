import { TestBed } from '@angular/core/testing';

import { PresignUploadService } from './presign-upload.service';

describe('PresignUploadService', () => {
  let service: PresignUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresignUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
