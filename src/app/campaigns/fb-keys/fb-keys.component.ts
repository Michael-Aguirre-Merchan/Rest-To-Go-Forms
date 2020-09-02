import { Component, OnInit, OnDestroy } from '@angular/core';
import { FbKey } from '../models/fbkey.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-fb-keys',
  templateUrl: './fb-keys.component.html',
  styleUrls: ['./fb-keys.component.scss']
})
export class FbKeysComponent implements OnInit, OnDestroy {

  private fbKey: FbKey;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private campaignService: CampaignsService) { }
  
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
      this.fbKey = this.dataForm.value;
      this.campaignService.addFbKeys ({
        unique_id: this.fbKey.uniqueId,
        company_unique_id: this.fbKey.companyUniqueId,
        name: this.fbKey.name,
        account_name: this.fbKey.accountName,
        app_name: this.fbKey.appName,
        user_name: this.fbKey.userName,
        source: this.fbKey.source,
        source_id: this.fbKey.sourceId,
        source_type: this.fbKey.sourceType,
        source_alias: this.fbKey.sourceAlias,
        status: this.fbKey.status,
        enabled: this.fbKey.enabled,
        encrypted_app_id: this.fbKey.encryptedAppId,
        encrypted_account_id: this.fbKey.encryptedAccountId,
        encrypted_access_token: this.fbKey.encryptedAccessToken,
        encrypted_app_secret: this.fbKey.encryptedAppSecret
      });
      console.log(this.fbKey)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}