import { NgModule } from '@angular/core';
import { AngularNotificationComponent } from './angular-notification.component';
import { NotwidthDirective } from './directives/notwidth.directive';
import { NotifComponent } from './components/notif/notif.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularNotificationService } from './angular-notification.service';



@NgModule({
  declarations: [AngularNotificationComponent, NotwidthDirective, NotifComponent],
  imports: [
    BrowserModule
  ],
  exports: [AngularNotificationComponent, NotifComponent ]
})
export class AngularNotificationModule { }
