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

  loading = false;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      id: ['', Validators.required],
      uniqueId: ['', Validators.required],
      sku: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      imageUrl: ['', Validators.required],
      contentUrl: [''],
      price: ['', Validators.required],
      status: ['', Validators.required],
      enabled: ['', Validators.required],
      openPrice: ['', Validators.required],
      openStock: ['', Validators.required],
      payload: ['', Validators.required],
      qcode: ['', Validators.required]  
    });
  }
    Submit()  {
      if (this.dataForm.valid) {
        this.product = this.dataForm.value;
        console.log(this.product)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
  }