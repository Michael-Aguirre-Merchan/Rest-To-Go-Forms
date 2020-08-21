import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from './campaign/campaign.component';
import { MediaComponent } from './media/media.component';
import { FbKeysComponent } from './fb-keys/fb-keys.component';



@NgModule({
  declarations: [CampaignComponent, MediaComponent, FbKeysComponent],
  imports: [
    CommonModule
  ]
})
export class CampaignsModule { }
