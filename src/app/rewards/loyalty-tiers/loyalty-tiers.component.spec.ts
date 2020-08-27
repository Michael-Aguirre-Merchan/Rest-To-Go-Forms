import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyTiersComponent } from './loyalty-tiers.component';

describe('LoyaltyTiersComponent', () => {
  let component: LoyaltyTiersComponent;
  let fixture: ComponentFixture<LoyaltyTiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoyaltyTiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoyaltyTiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
