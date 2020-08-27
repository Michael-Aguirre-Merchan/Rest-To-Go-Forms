import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoyaltyTiers } from '../models/loyalty-tiers.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loyalty-tiers',
  templateUrl: './loyalty-tiers.component.html',
  styleUrls: ['./loyalty-tiers.component.scss']
})
export class LoyaltyTiersComponent implements OnInit, OnDestroy {

  private loyaltyTiers: LoyaltyTiers;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      next_tier: ['', Validators.required],
      previous_tier: ['', Validators.required],
      source: ['', Validators.required],
      source_alias: ['', Validators.required],
      source_id: ['', Validators.required],
      source_type: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.loyaltyTiers = this.dataForm.value;
      console.log(this.loyaltyTiers)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
