import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quote } from '../models/quote.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy {

  private quote: Quote;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      notes: ['', Validators.required],
      content_url: ['', Validators.required],
      budget: ['', Validators.required],
      total: ['', Validators.required],
      duration: ['', Validators.required],
      duration_unit: ['', Validators.required],
      duration_description: ['', Validators.required],
      payload: ['', Validators.required],
      next_action_at: ['', Validators.required],
    });
  }
    submit()  {
      if (this.dataForm.valid) {
        this.quote = this.dataForm.value;
        console.log(this.quote)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
}
