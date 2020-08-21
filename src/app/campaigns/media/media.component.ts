import { Component, OnInit } from '@angular/core';
import { Media } from '../models/media.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  private media: Media;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void { this.initForm(); }

  initForm() {
    
    this.dataForm = this.fb.group({
      textname: ['', Validators.required],
      textcode: ['', Validators.required],
      textdescription: ['', Validators.required],
      textmedium_type: ['', Validators.required],
      textmedium_link: ['', Validators.required],
      textstatus: ['', Validators.required],
      textenabled: ['', Validators.required]
    });
  }
  submit()  {
    if (this.dataForm.valid) {
      this.media = this.dataForm.value;
      console.log(this.media)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}
