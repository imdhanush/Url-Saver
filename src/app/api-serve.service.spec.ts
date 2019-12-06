import { TestBed } from '@angular/core/testing';

import { ApiServeService } from './api-serve.service';

describe('ApiServeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiServeService = TestBed.get(ApiServeService);
    expect(service).toBeTruthy();
  });
});
