import { TestBed } from '@angular/core/testing';

import { ManagerauthguardService } from './managerauthguard.service';

describe('ManagerauthguardService', () => {
  let service: ManagerauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
