import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeSettingsComponent } from './exchange-settings.component';

describe('ExchangeSettingsComponent', () => {
  let component: ExchangeSettingsComponent;
  let fixture: ComponentFixture<ExchangeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
