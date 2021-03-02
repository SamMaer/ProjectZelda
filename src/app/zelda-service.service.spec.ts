import { TestBed } from '@angular/core/testing';

import { ZeldaServiceService } from './zelda-service.service';

describe('ZeldaServiceService', () => {
  let service: ZeldaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeldaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
