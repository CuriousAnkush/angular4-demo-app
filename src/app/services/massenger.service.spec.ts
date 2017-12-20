import { TestBed, inject } from '@angular/core/testing';

import { MassangerService } from './massanger.service';

describe('MassangerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MassangerService]
    });
  });

  it('should be created', inject([MassangerService], (service: MassangerService) => {
    expect(service).toBeTruthy();
  }));
});
