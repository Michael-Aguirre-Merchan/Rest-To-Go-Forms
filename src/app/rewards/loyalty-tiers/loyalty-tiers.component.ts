import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoyaltyTier } from '../models/loyalty-tier.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RewardsService } from '../rewards.service';

@Component({
  selector: 'app-loyalty-tiers',
  templateUrl: './loyalty-tiers.component.html',
  styleUrls: ['./loyalty-tiers.component.scss']
})
export class LoyaltyTiersComponent implements OnInit, OnDestroy {

  private loyaltyTier: LoyaltyTier;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private rewardsService: RewardsService) { }

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
      this.loyaltyTier = this.dataForm.value;
      this.rewardsService.addLoyaltyTiers ({ 
        unique_id: this.loyaltyTier.uniqueId, 
        code: this.loyaltyTier.code,
        name: this.loyaltyTier.name,
        next_tier: this.loyaltyTier.nextTier,
        previous_tier: this.loyaltyTier.previousTier,
        source: this.loyaltyTier.source,
        source_alias: this.loyaltyTier.sourceAlias,
        source_id: this.loyaltyTier.sourceId,
        source_type: this.loyaltyTier.sourceType,
      });
      console.log(this.loyaltyTier)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
