import { TestBed } from '@angular/core/testing';

import { AngularNotificationService } from './angular-notification.service';

describe('AngularNotificationService', () => {
  let service: AngularNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
