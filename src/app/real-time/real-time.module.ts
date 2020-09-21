import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacionComponent } from './notificacion/notificacion.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [NotificacionComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class RealTimeModule { }
