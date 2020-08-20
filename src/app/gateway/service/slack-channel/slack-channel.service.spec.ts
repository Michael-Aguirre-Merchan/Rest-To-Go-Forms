import { TestBed } from '@angular/core/testing';

import { SlackChannelService } from './slack-channel.service';

describe('SlackChannelService', () => {
  let service: SlackChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlackChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
