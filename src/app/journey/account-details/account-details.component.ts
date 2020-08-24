import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountDetails } from '../models/account-details';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit, OnDestroy {

  private accountDetails: AccountDetails;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      
      phone_number: ['', Validators.required],
      primary_email: ['', Validators.required],
      web_site: [''],
      twitter: [''],
      fb: [''],
      instagram: [''],
      linkedin: [''],
      youtube: [''],
      blog: [''],
      network_a: ['', Validators.required],
      network_b: ['', Validators.required],  
      notes: [''],  

    });
  }
    submit()  {
      if (this.dataForm.valid) {
        this.accountDetails = this.dataForm.value;
        console.log(this.accountDetails)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
  }