import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CustomerRewardsData, LoyaltyDetailsData, LoyaltyTiersData, PurchaseTresholdsData, RewardCouponsData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  constructor() { }

  addCustomerRewards(
    customerRewardsData: CustomerRewardsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/customerrewards/',
      { customerRewards: customerRewardsData, });
  }
  addLoyaltyDetails(
    loyaltyDetailsData: LoyaltyDetailsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/loyaltydetails/',
      { loyaltyDetails: loyaltyDetailsData, });
  }
  addLoyaltyTiers(
    loyaltyTiersData: LoyaltyTiersData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/loyaltytiers/',
      { loyaltyTierss: loyaltyTiersData, });
  }
  addPurchaseTresholds(
    purchaseTresholdsData: PurchaseTresholdsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/purchasetresholds/',
      { purchaseTresholds: purchaseTresholdsData, });
  }
  addRewardCoupons(
    rewardCouponsData: RewardCouponsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/rewardcoupons/',
      { rewardCoupons: rewardCouponsData, });
  }


}
