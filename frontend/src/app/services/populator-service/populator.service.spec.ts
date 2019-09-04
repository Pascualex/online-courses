import { TestBed } from '@angular/core/testing';

import { PopulatorService } from './populator.service';

describe('PopulatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopulatorService = TestBed.get(PopulatorService);
    expect(service).toBeTruthy();
  });
});
