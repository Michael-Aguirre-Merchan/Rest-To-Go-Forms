import { Component, OnInit } from '@angular/core';
import {addToCart} from '../models/add-to-cart.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  private AddToCart: addToCart;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
  
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
  Submit()  {
    if (this.dataForm.valid) {
      this.AddToCart = this.dataForm.value;
      console.log(this.AddToCart)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}
