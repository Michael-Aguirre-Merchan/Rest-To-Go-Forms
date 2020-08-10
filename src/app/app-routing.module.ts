import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./journey/journey.module').then(m => m.JourneyModule)},
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
  path: 'cart',
  component: AddToCartComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
