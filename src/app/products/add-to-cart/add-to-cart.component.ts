import { Component, OnInit, OnDestroy } from '@angular/core';
import {addToCart} from '../models/cart.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit, OnDestroy {

  private AddToCart: addToCart;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }
  
  ngOnInit(): void { this.initForm(); }

  initForm() {
    
    this.dataForm = this.fb.group({
      user_unique_id: ['', Validators.required],
      cartNotes: [''],
      sku: ['', Validators.required],
      productNotes: [''],
      quantity: ['', Validators.required]
    });
  }
  submit()  {
    if (this.dataForm.valid) {
      this.AddToCart = this.dataForm.value;
      this.productsService.addToCart ({ 
        user_unique_id: this.AddToCart.userUniqueId, 
        cartNotes: this.AddToCart.cartNotes,
        sku: this.AddToCart.sku,
        productNotes: this.AddToCart.productNotes,
        quantity: this.AddToCart.quantity 
      });
      console.log(this.AddToCart)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}
