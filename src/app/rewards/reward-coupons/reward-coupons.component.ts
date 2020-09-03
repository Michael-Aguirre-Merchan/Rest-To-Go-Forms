import { Component, OnInit, OnDestroy } from '@angular/core';
import { RewardCoupon } from '../models/reward-coupon.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RewardsService } from '../rewards.service';
@Component({
  selector: 'app-reward-coupons',
  templateUrl: './reward-coupons.component.html',
  styleUrls: ['./reward-coupons.component.scss']
})
export class RewardCouponsComponent implements OnInit, OnDestroy {

  private rewardCoupon: RewardCoupon;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private rewardsService: RewardsService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {
    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      coupon_code: ['', Validators.required],
      country_id: ['', Validators.required],
      country_name: ['', Validators.required],
      currency_unique_id: ['', Validators.required],
      currency_code: ['', Validators.required],
      currency_name: ['', Validators.required],
      money_threshold: ['', Validators.required],
      points_threshold: ['', Validators.required],
      source: ['', Validators.required],
      source_alias: ['', Validators.required],
      source_id: ['', Validators.required],
      source_type: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.rewardCoupon = this.dataForm.value;
      this.rewardsService.addRewardCoupons ({ 
        unique_id: this.rewardCoupon.uniqueId, 
        code: this.rewardCoupon.code,
        name: this.rewardCoupon.name,
        description: this.rewardCoupon.description,
        coupon_code: this.rewardCoupon.couponCode,
        country_id: this.rewardCoupon.countryId,
        country_name: this.rewardCoupon.countryName,
        currency_unique_id: this.rewardCoupon.currencyUniqueId,
        currency_code: this.rewardCoupon.currencyCode,
        currency_name: this.rewardCoupon.currencyName,
        money_threshold: this.rewardCoupon.moneyThreshold,
        points_threshold: this.rewardCoupon.pointsThreshold,
        source: this.rewardCoupon.source,
        source_alias: this.rewardCoupon.sourceAlias,
        source_id: this.rewardCoupon.sourceId,
        source_type: this.rewardCoupon.sourceType,
      });
      console.log(this.rewardCoupon)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}