import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
// import { AngularNotificationService ,  NotifComponent  } from 'ng-notification';
import { AngularNotificationService, NotifComponent  } from 'angular-notification-alert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notification';
  setting: any;
  red = false;

  @ViewChild('parent', {read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private Service: AngularNotificationService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  getRedNotification(): void {
   /* if (this.red ) {
      this.red = false;
    } else {
      this.red = true;
    }*/
    this.setting = {};
    this.red = true;
    this.setting = {
      width: '300px',
      type: 'danger',
      title: 'this an error message',
      body: '<b>Something went wrong </b> check it out',
      position: 'top right',
      duration: 10000,
      background: 'crimson'
    };
    this.Service.setProperties(this.setting);
  }
  addElement() {
    this.setting = {
      width: '300px',
      type: 'danger',
      title: 'this an error message',
      body: '<b>Something went wrong </b> check it out',
      position: 'center',
      duration: 4000,
      background: '#fff'
    };
    this.Service.setProperties(this.setting);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
    this.componentRef = this.target.createComponent(childComponent);
  }
  getWarningNotification() {
    this.setting = {
      width: '300px',
      type: 'warn',
      title: 'this a warning  message',
      body: '<b>There are some warnings </b> check it out',
      position: 'top right',
      duration: 5000
    };
    this.Service.setProperties(this.setting);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
    this.componentRef = this.target.createComponent(childComponent);
  }
  getSuccessNotification() {
    this.setting = {
      width: '300px',
      type: 'success',
      title: 'this a sucess message',
      body: '<b>Everything is in order  </b> cool',
      position: 'bottom right',
      duration: 5000
    };
    this.Service.setProperties(this.setting);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
    this.componentRef = this.target.createComponent(childComponent);
  }
  getCustomizedNotification() {
    this.setting = {
      type: 'default',
      title: 'this is a custom notification',
      body: '<h3>with a bright blue background</h3>',
      position: 'top left',
      duration: 70000,
      background : '#aff',
    };
    this.Service.setProperties(this.setting);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
    this.componentRef = this.target.createComponent(childComponent);
  }
}
