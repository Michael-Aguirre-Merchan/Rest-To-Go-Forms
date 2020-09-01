import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AreaData, GeoData, LocationHoursData, LocationData, PremiseData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor() { }

  addArea(
    areaData: AreaData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/area/',
      { area: areaData, });
  }
  addGeo(
    geoData: GeoData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/geo/',
      { geo: geoData, });
  }
  addcompanyKeys(
    locationHoursData: LocationHoursData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/locationhours/',
      { locationHours: locationHoursData, });
  }
  addLocation(
    locationData: LocationData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/location/',
      { location: locationData, });
  }
  addPremise(
    premiseData: PremiseData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23GATEWAY_URL + '/premise/',
      { premise: premiseData, });
  }

}
