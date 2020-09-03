import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductsComponent } from './add-products/add-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';



@NgModule({
  declarations: [
    AddProductsComponent, CategoriesComponent, AddToCartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
