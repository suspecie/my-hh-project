import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GeocodeService } from './geocode.service';
import { TestBed } from '@angular/core/testing';

describe('GeocodeService', () => {
  let service: GeocodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GeocodeService],
    });

    service = TestBed.inject(GeocodeService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
