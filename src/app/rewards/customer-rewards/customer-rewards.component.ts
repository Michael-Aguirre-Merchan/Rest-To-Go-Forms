import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomerRewards } from '../models/customer-rewards.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-rewards',
  templateUrl: './customer-rewards.component.html',
  styleUrls: ['./customer-rewards.component.scss']
})
export class CustomerRewardsComponent implements OnInit, OnDestroy {

  private customerRewards: CustomerRewards;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

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
      this.customerRewards = this.dataForm.value;
      console.log(this.customerRewards)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}