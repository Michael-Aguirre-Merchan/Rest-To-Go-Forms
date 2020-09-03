import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerReward } from '../models/customer-reward.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RewardsService } from '../rewards.service';

@Component({
  selector: 'app-customer-rewards',
  templateUrl: './customer-rewards.component.html',
  styleUrls: ['./customer-rewards.component.scss']
})
export class CustomerRewardsComponent implements OnInit, OnDestroy {

  private customerReward: CustomerReward;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private rewardsService: RewardsService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],
      customer_unique_id: ['', Validators.required],
      customer_id: ['', Validators.required],
      spent: ['', Validators.required],
      points: ['', Validators.required],
      expire_rule: ['', Validators.required],
      expiry_at: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.customerReward = this.dataForm.value;
      this.rewardsService.addCustomerRewards ({ 
        unique_id: this.customerReward.uniqueId, 
        customer_unique_id: this.customerReward.customerUniqueId,
        customer_id: this.customerReward.customerId,
        spent: this.customerReward.spent,
        points: this.customerReward.points,
        expire_rule: this.customerReward.expireRule,
        expiry_at: this.customerReward.expiryAt,
      });
      console.log(this.customerReward)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}