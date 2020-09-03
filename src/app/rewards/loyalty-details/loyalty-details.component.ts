import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoyaltyDetail } from '../models/loyalty-detail.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RewardsService } from '../rewards.service';

@Component({
  selector: 'app-loyalty-details',
  templateUrl: './loyalty-details.component.html',
  styleUrls: ['./loyalty-details.component.scss']
})
export class LoyaltyDetailsComponent implements OnInit, OnDestroy {

  private loyaltyDetail: LoyaltyDetail;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private rewardsService: RewardsService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      loyalty_tier: ['', Validators.required],
      unique_id: ['', Validators.required],
      name: ['', Validators.required],
      country_id: ['', Validators.required],
      country_name: ['', Validators.required],
      currency_unique_id: ['', Validators.required],
      currency_code: ['', Validators.required],
      currency_name: ['', Validators.required],
      minimum_spend: ['', Validators.required],
      maximum_spend: ['', Validators.required],
      minimum_points: ['', Validators.required],
      maximum_points: ['', Validators.required],
      default_tier: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.loyaltyDetail = this.dataForm.value;
      this.rewardsService.addLoyaltyDetails ({ 
        loyalty_tier: this.loyaltyDetail.loyaltyTier, 
        unique_id: this.loyaltyDetail.uniqueId,
        name: this.loyaltyDetail.name,
        country_id: this.loyaltyDetail.countryId,
        country_name: this.loyaltyDetail.countryName,
        currency_unique_id: this.loyaltyDetail.currencyUniqueId,
        currency_code: this.loyaltyDetail.currencyCode,
        currency_name: this.loyaltyDetail.currencyName,
        minimum_spend: this.loyaltyDetail.minimumSpend,
        maximum_spend: this.loyaltyDetail.maximumSpend,
        minimum_points: this.loyaltyDetail.minimumPoints,
        maximum_points: this.loyaltyDetail.maximumPoints,
        default_tier: this.loyaltyDetail.defaultTier,
      });
      console.log(this.loyaltyDetail)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}