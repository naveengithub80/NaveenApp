import { TestBed } from '@angular/core/testing';

import { EmployeeauthService } from './employeeauth.service';

describe('EmployeeauthService', () => {
  let service: EmployeeauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
