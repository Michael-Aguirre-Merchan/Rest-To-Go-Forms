import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Notificacion } from '../models/notificacion.model'
import { RealTimeService } from '../real-time.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss']
})
export class NotificacionComponent implements OnInit, OnDestroy {

  private notificacion: Notificacion;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private realTimeService: RealTimeService) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      id: ['', Validators.required],
      unique_id: ['', Validators.required],
      content: ['', Validators.required],
      url: ['', Validators.required],
      status: ['', Validators.required],
      source: ['', Validators.required],
      source_type: ['', Validators.required],
      source_id: ['', Validators.required],
      source_alias: ['', Validators.required],
      target_id: ['', Validators.required],
      target: ['', Validators.required],
      target_alias: ['', Validators.required],
      target_type: ['', Validators.required],
      target_email: ['', Validators.required],
      target_phone: ['', Validators.required],
      created_at: ['', Validators.required],
      created_by: ['', Validators.required],
      updated_at: ['', Validators.required],
      updated_by: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.notificacion = this.dataForm.value;
      this.realTimeService.addNotificacion ({
        id: this.notificacion.id ,
        unique_id: this.notificacion.uniqueId ,
        content: this.notificacion.content ,
        url: this.notificacion.url ,
        status: this.notificacion.status ,
        source: this.notificacion.source ,
        source_type: this.notificacion.sourceType ,
        source_id: this.notificacion.sourceId ,
        source_alias: this.notificacion.sourceAlias ,
        target_id: this.notificacion.targetId ,
        target: this.notificacion.target ,
        target_alias: this.notificacion.targetAlias ,
        target_type: this.notificacion.targetType ,
        target_email: this.notificacion.targetEmail ,
        target_phone: this.notificacion.targetPhone ,
        created_at: this.notificacion.createdAt ,
        created_by: this.notificacion.createdBy ,
        updated_at: this.notificacion.updatedAt ,
        updated_by: this.notificacion.updatedBy ,
      })
      console.log(this.notificacion)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
