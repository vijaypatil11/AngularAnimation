import { Directive, ElementRef, HostListener, Input , OnInit, Output, EventEmitter } from '@angular/core';
import {Setting } from '../models/settin';

@Directive({
  selector: '[libNotwidth]'
})
export class NotwidthDirective  implements OnInit  {

  constructor(private el: ElementRef) { }

  @Input() setting: Setting;
  title: any;
  body: any;

  ngOnInit(): void {
    this.setUp(this.setting);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  private setWidth(width: string) {
    this.el.nativeElement.style.width = width;
  }
  private setUp(setting: any) {
    // width
    this.el.nativeElement.style.width = setting.width;

    // classes
    if ( setting.type === 'warn') {
      this.el.nativeElement.classList.add('yellow');
    } else if ( setting.type === 'danger') {
      this.el.nativeElement.classList.add('red');
    } else if ( setting.type === 'success') {
      this.el.nativeElement.classList.add('green');
    } else {
      this.el.nativeElement.classList.add('default');
    }

    // position
    if ( setting.position === 'bottom right') {
      this.el.nativeElement.parentElement.parentElement.previousSibling.remove();
      this.el.nativeElement.classList.add('bottom-right');
    } else if ( setting.position === 'top left') {
      this.el.nativeElement.parentElement.parentElement.previousSibling.remove();
      this.el.nativeElement.classList.add('top-left');
    } else if ( setting.position === 'bottom left') {
      this.el.nativeElement.parentElement.parentElement.previousSibling.remove();
      this.el.nativeElement.classList.add('bottom-left');
    } else if ( setting.position === 'center') {
      this.el.nativeElement.parentElement.parentElement.previousSibling.remove();
      this.el.nativeElement.classList.add('center');
    } else {
      this.el.nativeElement.parentElement.parentElement.previousSibling.remove();
      this.el.nativeElement.classList.add('top-right');
    }
    // opacity
    this.el.nativeElement.style.opacity = setting.opacity;

    // background color
    this.el.nativeElement.style.background = setting.background;

    // duration
    if (setting.duration === undefined) {
      this.setDuration(4000);
    } else {
      this.setDuration(setting.duration);
    }

  }
  private setDuration(time: number) {
    setTimeout(() => {
      // this.el.nativeElement.style.display = 'none';
      this.el.nativeElement.style.visibility = 'hidden';
      this.el.nativeElement.style.opacity = '0';
    }, time);
  }

  @HostListener('click') change() {
    console.log(' i see fire');
  }
}
