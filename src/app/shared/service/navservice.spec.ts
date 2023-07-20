import { TestBed } from '@angular/core/testing';

import { NavService } from './navservice.';

describe('NavserviceService', () => {
  let service: NavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
