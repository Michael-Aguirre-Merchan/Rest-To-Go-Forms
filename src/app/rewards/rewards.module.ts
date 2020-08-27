import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoyaltyTiersComponent } from './loyalty-tiers/loyalty-tiers.component';
import { LoyaltyDetailsComponent } from './loyalty-details/loyalty-details.component';
import { CustomerRewardsComponent } from './customer-rewards/customer-rewards.component';
import { PurchaseThresholdsComponent } from './purchase-thresholds/purchase-thresholds.component';
import { RewardCouponsComponent } from './reward-coupons/reward-coupons.component';



@NgModule({
  declarations: [LoyaltyTiersComponent, LoyaltyDetailsComponent, CustomerRewardsComponent, PurchaseThresholdsComponent, RewardCouponsComponent],
  imports: [
    CommonModule
  ]
})
export class RewardsModule { }
