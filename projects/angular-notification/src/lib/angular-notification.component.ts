import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-angular-notification',
  template: `
    <p>
      angular-notification works!hhhh
    </p>
  `,
  styles: []
})
export class AngularNotificationComponent implements OnInit {

  constructor() {
    console.log('in lib');
   }

  ngOnInit(): void {
  }

}
