import { Component, OnInit, OnDestroy } from '@angular/core';
import {Product} from '../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit, OnDestroy {

  private product: Product;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }
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
    submit()  {
      if (this.dataForm.valid) {
        this.product = this.dataForm.value;
        this.productsService.addProduct ({ 
          id: this.product.id, 
          uniqueId: this.product.uniqueId,
          sku: this.product.sku,
          name: this.product.name,
          description: this.product.description,
          imageUrl: this.product.imageUrl,
          contentUrl: this.product.contentUrl,
          price: this.product.price,
          status: this.product.status,
          enabled: this.product.enabled,
          openPrice: this.product.openPrice,
          openStock: this.product.openStock,
          payload: this.product.payload,
          qcode: this.product.qcode 
        });
        console.log(this.product)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
  }