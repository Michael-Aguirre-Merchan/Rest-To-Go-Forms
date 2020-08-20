import { Component, OnInit } from '@angular/core';
import { companyKeys } from '../models/company-keys.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-keys',
  templateUrl: './company-keys.component.html',
  styleUrls: ['./company-keys.component.scss']
})
export class CompanyKeysComponent implements OnInit {

  private CompanyKeys: companyKeys;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({

      description: ['', Validators.required],
      provider: ['', Validators.required],
      encripted_api_key: ['', Validators.required],
      encrypted_api_secret: ['', Validators.required],
      api_region: ['', Validators.required]

    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.CompanyKeys = this.dataForm.value;
      console.log(this.CompanyKeys)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
