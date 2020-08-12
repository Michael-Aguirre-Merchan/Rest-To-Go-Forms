import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AccountComponent } from './journey/account/account.component';
import { ContactComponent } from './journey/contact/contact.component';
import { LeadComponent } from './journey/lead/lead.component';
import { GeoComponent } from './geo-location/geo/geo.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
