import { TestBed } from '@angular/core/testing';

import { ManagerauthService } from './managerauth.service';

describe('ManagerauthService', () => {
  let service: ManagerauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
