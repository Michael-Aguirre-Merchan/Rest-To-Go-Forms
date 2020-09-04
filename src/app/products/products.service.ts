import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ProductData, addToCartData, CategoriesData } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  addProduct(
    productData: ProductData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23PRODUCTS_URL + '/product/',
      { product: productData, });
  }
  addToCart(
    addToCartData: addToCartData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23PRODUCTS_URL + '/addtocart/',
      { addToCart: addToCartData, });
  }
  addCategories(
    categoriesData: CategoriesData
  ): Observable<ApiResponse> {
    return this.http.post(environment.API_23PRODUCTS_URL + '/categories/',
      { categories: categoriesData, });
  }

}
