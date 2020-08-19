import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/account.model'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private account: Account;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
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
      console.log(this.account)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
