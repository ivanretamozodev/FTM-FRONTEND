import { TestBed } from '@angular/core/testing';

import { DetailsMoviesService } from './details-movies.service';

describe('DetailsMoviesService', () => {
  let service: DetailsMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
