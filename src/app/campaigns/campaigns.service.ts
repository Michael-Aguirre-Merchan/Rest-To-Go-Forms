import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { CampaignData, FbKeysData, MediaData } from './campaign.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor() { }

  addCampaign(
    campaignData: CampaignData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CAMPAIGNS_URL + '/campaign/',
      { campaign: campaignData, });
  }
  addFbKeys(
    fbKeysData: FbKeysData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CAMPAIGNS_URL + '/fbkeys/',
      { fbKeys: fbKeysData, });
  }
  addMedia(
    mediaData: MediaData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CAMPAIGNS_URL + '/media/',
      { media: mediaData, });
  }

}
