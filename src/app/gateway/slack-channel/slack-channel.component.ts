import { Component, OnInit } from '@angular/core';
import { slackChannel } from '../models/slack-channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slack-channel',
  templateUrl: './slack-channel.component.html',
  styleUrls: ['./slack-channel.component.scss']
})
export class SlackChannelComponent implements OnInit {

  private SlackChannel: slackChannel;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { this.initForm(); }

  initForm() {

    this.dataForm = this.fb.group({
      slack_hook: ['', Validators.required],
      slack_channel: ['', Validators.required],
      slack_username: ['', Validators.required],
    });
  }
  submit() {
    if (this.dataForm.valid) {
      this.SlackChannel = this.dataForm.value;
      console.log(this.SlackChannel)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
