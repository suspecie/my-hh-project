import { Apollo } from 'apollo-angular';
import { TestBed } from '@angular/core/testing';

import { AllCategoryService } from './all-category.service';

describe('AllCategoryService', () => {
  let service: AllCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AllCategoryService,
        Apollo,
      ],
    });
    service = TestBed.inject(AllCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
