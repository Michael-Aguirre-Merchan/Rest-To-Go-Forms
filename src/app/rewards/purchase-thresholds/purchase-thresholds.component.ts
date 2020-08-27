import { Component, OnInit, OnDestroy } from '@angular/core';
import { PurchaseTresholds } from '../models/purchase-thresholds.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-thresholds',
  templateUrl: './purchase-thresholds.component.html',
  styleUrls: ['./purchase-thresholds.component.scss']
})
export class PurchaseThresholdsComponent implements OnInit, OnDestroy {

  private purchaseTresholds: PurchaseTresholds;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

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
      this.purchaseTresholds = this.dataForm.value;
      console.log(this.purchaseTresholds)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
