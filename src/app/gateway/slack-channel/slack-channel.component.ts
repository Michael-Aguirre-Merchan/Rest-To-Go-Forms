import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlackChannel } from '../models/slackchannel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GatewayService } from '../gateway.service';

@Component({
  selector: 'app-slack-channel',
  templateUrl: './slack-channel.component.html',
  styleUrls: ['./slack-channel.component.scss']
})
export class SlackChannelComponent implements OnInit, OnDestroy {

  private slackChannel: SlackChannel;

  dataForm: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private gatewayService: GatewayService) { }

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
      this.slackChannel = this.dataForm.value;
      this.gatewayService.addSlackChannel ({ 
        slack_hook: this.slackChannel.slackHook, 
        slack_channel: this.slackChannel.slackChannel,
        slack_username: this.slackChannel.slackUsername,
      });
      console.log(this.slackChannel)
    }
  }
  ngOnDestroy(): void {
    this.loading = false;
  }
}
