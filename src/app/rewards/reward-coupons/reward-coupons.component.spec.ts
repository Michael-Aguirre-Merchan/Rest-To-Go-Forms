import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCouponsComponent } from './reward-coupons.component';

describe('RewardCouponsComponent', () => {
  let component: RewardCouponsComponent;
  let fixture: ComponentFixture<RewardCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
