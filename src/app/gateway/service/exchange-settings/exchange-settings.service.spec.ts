import { TestBed } from '@angular/core/testing';

import { ExchangeSettingsService } from './exchange-settings.service';

describe('ExchangeSettingsService', () => {
  let service: ExchangeSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
