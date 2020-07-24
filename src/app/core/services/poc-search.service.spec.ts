import { TestBed } from '@angular/core/testing';

import { PocSearchService } from './poc-search.service';

describe('PocSearchService', () => {
  let service: PocSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PocSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
