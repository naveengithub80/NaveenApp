import { TestBed } from '@angular/core/testing';

import { EmployeeauthguardService } from './employeeauthguard.service';

describe('EmployeeauthguardService', () => {
  let service: EmployeeauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
