import { Component, OnInit ,  Output, EventEmitter} from '@angular/core';
import { NotwidthDirective } from '../../directives/notwidth.directive';
import {Setting } from '../../models/settin';
import { AngularNotificationService } from '../../angular-notification.service';

@Component({
  selector: 'lib-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  setting: Setting;
  open = true;
  constructor(private Service: AngularNotificationService) { }

  ngOnInit(): void {
   /* this.setting = {
      width: '300px',
      type: 'warn',
      title: 'notification title',
      body: 'this is a message of warning ',
      position: 'bottom right',
      opacity: '1',
      duration: 10000,
      background: 'yellow'
    };*/
    this.setting = this.Service.getProperties();
    console.log('juuuu ', this.setting);
  }

  close(): void {
    this.open = false;
  }
}
