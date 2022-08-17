import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NotifComponent } from './notif.component';

describe('NotifComponent', () => {
  let component: NotifComponent;
  let fixture: ComponentFixture<NotifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
