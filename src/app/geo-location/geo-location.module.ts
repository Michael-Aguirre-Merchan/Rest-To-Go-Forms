import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GeoComponent} from './geo/geo.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AreaComponent } from './area/area.component';
import { LocationComponent } from './location/location.component';
import { LocationHoursComponent } from './location-hours/location-hours.component';
import { PremiseComponent } from './premise/premise.component';


@NgModule({
  declarations: [
    GeoComponent,
    AreaComponent,
    LocationComponent,
    LocationHoursComponent,
    PremiseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class GeoLocationModule { }
