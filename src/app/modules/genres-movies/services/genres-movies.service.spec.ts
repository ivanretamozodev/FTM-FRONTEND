import { TestBed } from '@angular/core/testing';

import { GenresMoviesService } from './genres-movies.service';

describe('GenresMoviesService', () => {
  let service: GenresMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenresMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
