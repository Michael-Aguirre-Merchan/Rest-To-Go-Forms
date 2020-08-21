import { Component, OnInit } from '@angular/core';
import { Campaign } from '../models/campaign.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {

  private campaign: Campaign;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void { this.initForm(); }

  initForm() {
    
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      duration_unit: ['', Validators.required],
      budget: ['', Validators.required]
    });
  }
  submit()  {
    if (this.dataForm.valid) {
      this.campaign = this.dataForm.value;
      console.log(this.campaign)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}
