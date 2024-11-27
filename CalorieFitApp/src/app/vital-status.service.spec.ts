import { TestBed } from '@angular/core/testing';

import { VitalStatusService } from './vital-status.service';

describe('VitalStatusService', () => {
  let service: VitalStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VitalStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
