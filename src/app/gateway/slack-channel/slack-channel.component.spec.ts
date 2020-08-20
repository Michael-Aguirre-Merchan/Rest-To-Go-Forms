import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackChannelComponent } from './slack-channel.component';

describe('SlackChannelComponent', () => {
  let component: SlackChannelComponent;
  let fixture: ComponentFixture<SlackChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
