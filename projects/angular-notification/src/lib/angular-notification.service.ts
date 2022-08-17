import { Injectable } from '@angular/core';
import {Setting } from './models/settin';

@Injectable({
  providedIn: 'root'
})
export class AngularNotificationService {
  properties: Setting;

  constructor() { }
  setProperties(prop: any) {
    this.properties = prop;
  }
  getProperties() {
    return this.properties;
  }
}
