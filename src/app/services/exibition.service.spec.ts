import { TestBed } from '@angular/core/testing';

import { ExibitionService } from './exibition.service';

describe('ExibitionService', () => {
  let service: ExibitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExibitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
