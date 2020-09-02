import { Component, OnInit, OnDestroy } from '@angular/core';
import { Media } from '../models/media.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CampaignsService } from '../campaigns.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit, OnDestroy {

  private media: Media;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private campaignService: CampaignsService) { }
  
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
      this.campaignService.addMedia ({
        textname: this.media.textname,
        textcode: this.media.textcode,
        textdescription: this.media.textdescription,
        textmedium_type: this.media.textmediumType,
        textmedium_link: this.media.textmediumLink,
        textstatus: this.media.textstatus,
        textenabled: this.media.textenabled
      });
      console.log(this.media)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
}

}
