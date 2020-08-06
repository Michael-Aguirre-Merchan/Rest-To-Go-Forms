import { Component, OnInit } from '@angular/core';
import {Products} from '../models/add-products.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  private product: Products;

  dataForm: FormGroup;

  constructor(private fb: FormBuilder) { 

    this.dataForm = this.fb.group({
      id: ['number', Validators.required],
      uniqueId: ['string', Validators.required],
      sku: ['string', Validators.required],
      name: ['string', Validators.required],
      description: ['string', Validators.required],
      imageUrl: ['string', Validators.required],
      contentUrl: ['string', Validators.required],
      price: ['number', Validators.required],
      status: ['string', Validators.required],
      enabled: ['string', Validators.required],
      openPrice: ['boolean', Validators.required],
      openStock: ['boolean', Validators.required],
      payload: ['string', Validators.required],
      qcode: ['string', Validators.required]  
    });

    onsubmit = () => {
      if (this.dataForm.valid) {
        this.product = this.dataForm.value;
        console.log(this.product)
      }
    }
  }

  ngOnInit(): void {
  }

}
