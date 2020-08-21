import { Component, OnInit } from '@angular/core';
import { FbKeys } from '../models/fb-keys.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fb-keys',
  templateUrl: './fb-keys.component.html',
  styleUrls: ['./fb-keys.component.scss']
})
export class FbKeysComponent implements OnInit {

  private fbKeys: FbKeys;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void { this.initForm(); }

  initForm() {
    
    this.dataForm = this.fb.group({
      unique_id: ['', Validators.required],
      company_unique_id: ['', Validators.required],
      name: ['', Validators.required],
      account_name: ['', Validators.required],
      app_name: ['', Validators.required],
      user_name: ['', Validators.required],
      source: ['', Validators.required],
      source_id: ['', Validators.required],
      source_type: ['', Validators.required],
      source_alias: ['', Validators.required],
      status: ['', Validators.required],
      enabled: ['', Validators.required],
      encrypted_app_id: ['', Validators.required],
      encrypted_account_id: ['', Validators.required],
      encrypted_access_token: ['', Validators.required],
      encrypted_app_secret: ['', Validators.required]
    });
  }
  submit()  {
    if (this.dataForm.valid) {
      this.fbKeys = this.dataForm.value;
      console.log(this.fbKeys)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}