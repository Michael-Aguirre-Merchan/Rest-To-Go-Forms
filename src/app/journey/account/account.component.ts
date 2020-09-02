import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/account.model'
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  private account: Account;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private journeyService: JourneyService) { }
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required]
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.account = this.dataForm.value;
      this.journeyService.addAccount ({ 
        code: this.account.code, 
        name: this.account.name 
      });
      console.log(this.account)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
