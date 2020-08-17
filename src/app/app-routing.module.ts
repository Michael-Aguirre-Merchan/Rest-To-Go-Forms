import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AccountComponent } from './journey/account/account.component';
import { ContactComponent } from './journey/contact/contact.component';
import { LeadComponent } from './journey/lead/lead.component';
import { GeoComponent } from './geo-location/geo/geo.component';
import { AreaComponent } from './geo-location/area/area.component';
import { LocationComponent } from './geo-location/location/location.component';
import { LocationHoursComponent } from './geo-location/location-hours/location-hours.component';
import { PremiseComponent } from './geo-location/premise/premise.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: AddProductsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'lead',
    component: LeadComponent,
  },
  {
    path: 'cart',
    component: AddToCartComponent,
  },
  {
    path: 'geo',
    component: GeoComponent
  },
  {
    path: 'area',
    component: AreaComponent
  },
  {
    path: 'loc',
    component: LocationComponent
  },
  {
    path: 'lh',
    component: LocationHoursComponent
  },
  {
    path: 'premise',
    component: PremiseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
