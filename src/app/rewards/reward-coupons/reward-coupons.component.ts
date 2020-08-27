import { Component, OnInit, OnDestroy } from '@angular/core';
import { RewardCoupons } from '../models/reward-coupons.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reward-coupons',
  templateUrl: './reward-coupons.component.html',
  styleUrls: ['./reward-coupons.component.scss']
})
export class RewardCouponsComponent implements OnInit, OnDestroy {

  private rewardCoupons: RewardCoupons;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

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
      this.rewardCoupons = this.dataForm.value;
      console.log(this.rewardCoupons)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}