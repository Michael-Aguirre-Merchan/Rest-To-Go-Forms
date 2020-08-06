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
      id: ['', Validators.required],
      uniqueId: ['', Validators.required],
      sku: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      contentUrl: ['', Validators.required],
      price: ['', Validators.required],
      status: ['', Validators.required],
      enabled: ['', Validators.required],
      openPrice: ['', Validators.required],
      openStock: ['', Validators.required],
      payload: ['', Validators.required],
      qcode: ['', Validators.required]  
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
