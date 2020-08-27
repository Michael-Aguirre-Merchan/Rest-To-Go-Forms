import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyDetailsComponent } from './loyalty-details.component';

describe('LoyaltyDetailsComponent', () => {
  let component: LoyaltyDetailsComponent;
  let fixture: ComponentFixture<LoyaltyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
