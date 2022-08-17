import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularNotificationComponent } from './angular-notification.component';

describe('AngularNotificationComponent', () => {
  let component: AngularNotificationComponent;
  let fixture: ComponentFixture<AngularNotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
