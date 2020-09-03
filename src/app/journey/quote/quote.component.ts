import { Component, OnInit, OnDestroy } from '@angular/core';
import { Quote } from '../models/quote.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JourneyService } from '../journey.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit, OnDestroy {

  private quote: Quote;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private journeyService: JourneyService) { }
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
        this.journeyService.addQuote ({
          code: this.quote.code,
          name: this.quote.name,
          notes: this.quote.notes,
          content_url: this.quote.contentUrl,
          budget: this.quote.budget,
          total: this.quote.total,
          duration: this.quote.duration,
          duration_unit: this.quote.durationUnit,
          duration_description: this.quote.durationDescription,
          payload: this.quote.payload,
          next_action_at: this.quote.nextActionAt,
        })
        console.log(this.quote)
      }
    }
    ngOnDestroy(): void {
      this.loading = false;
  }
}
