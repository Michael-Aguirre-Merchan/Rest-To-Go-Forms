import { Component, OnInit, OnDestroy } from '@angular/core';
import { companyKeys } from '../models/companykey.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-company-keys',
  templateUrl: './company-keys.component.html',
  styleUrls: ['./company-keys.component.scss']
})
export class CompanyKeysComponent implements OnInit, OnDestroy {

  private CompanyKeys: companyKeys;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private gatewayService: GatewayService) { }

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
      this.gatewayService.addcompanyKeys ({ 
        description: this.CompanyKeys.description, 
        provider: this.CompanyKeys.provider,
        encripted_api_key: this.CompanyKeys.encriptedApiKey,
        encrypted_api_secret: this.CompanyKeys.encryptedApiSecret,
        api_region: this.CompanyKeys.apiRegion
      });
      console.log(this.CompanyKeys)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
