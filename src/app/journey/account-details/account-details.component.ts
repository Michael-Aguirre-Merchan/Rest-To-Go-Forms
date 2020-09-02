import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountDetail } from '../models/accountdetail.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class accountDetailsComponent implements OnInit, OnDestroy {

  private accountDetail: AccountDetail;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private journeyService: JourneyService) { }
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
        
        this.accountDetail = this.dataForm.value;
        this.journeyService.addAccountDetails ({ 
          phone_number: this.accountDetail.phoneNumber, 
          primary_email: this.accountDetail.primaryEmail,
          web_site: this.accountDetail.webSite,
          twitter: this.accountDetail.twitter,
          fb: this.accountDetail.fb,
          instagram: this.accountDetail.instagram,
          linkedin: this.accountDetail.linkedin,
          youtube: this.accountDetail.youtube,
          blog: this.accountDetail.blog,
          network_a: this.accountDetail.networkA,
          network_b: this.accountDetail.networkB,  
          notes: this.accountDetail.notes,  });
          console.log(this.accountDetail)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
  }