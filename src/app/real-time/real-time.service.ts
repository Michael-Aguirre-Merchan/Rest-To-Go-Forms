import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { MensajeData, NotificacionData, SettingsData } from './real-time.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RealTimeService {

  constructor() { }

  addMensaje(
    mensajeData: MensajeData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/mensaje/',
      { mensaje: mensajeData, });
  }
  addNotificacion(
    notificacionData: NotificacionData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/notificacion/',
      { notificacion: notificacionData, });
  }
  addSettings(
    settingsData:SettingsData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23CRM_URL + '/settings/',
      { settings: settingsData, });
  }

}
