import { Component, OnInit, OnDestroy } from '@angular/core';
import { PurchaseTreshold } from '../models/purchase-threshold.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RewardsService } from '../rewards.service';

@Component({
  selector: 'app-purchase-thresholds',
  templateUrl: './purchase-thresholds.component.html',
  styleUrls: ['./purchase-thresholds.component.scss']
})
export class PurchaseThresholdsComponent implements OnInit, OnDestroy {

  private purchaseTreshold: PurchaseTreshold;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private rewardsService: RewardsService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() { 

    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],
      name: ['', Validators.required],
      threshold: ['', Validators.required],
      extra_points: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.purchaseTreshold = this.dataForm.value;
      this.rewardsService.addPurchaseTresholds ({ 
        unique_id: this.purchaseTreshold.uniqueId, 
        name: this.purchaseTreshold.name,
        threshold: this.purchaseTreshold.threshold,
        extra_points: this.purchaseTreshold.extraPoints,
      });
      console.log(this.purchaseTreshold)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
