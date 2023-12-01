import { TestBed } from '@angular/core/testing';

import { ApiJSONplaceholderService } from './api-jsonplaceholder.service';

describe('ApiJSONplaceholderService', () => {
  let service: ApiJSONplaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJSONplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
