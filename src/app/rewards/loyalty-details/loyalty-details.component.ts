import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoyaltyDetails } from '../models/loyalty-details.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loyalty-details',
  templateUrl: './loyalty-details.component.html',
  styleUrls: ['./loyalty-details.component.scss']
})
export class LoyaltyDetailsComponent implements OnInit, OnDestroy {

  private loyaltyDetails: LoyaltyDetails;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

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
      this.loyaltyDetails = this.dataForm.value;
      console.log(this.loyaltyDetails)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}