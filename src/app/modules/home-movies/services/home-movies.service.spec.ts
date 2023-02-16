import { TestBed } from '@angular/core/testing';

import { HomeMoviesService } from './home-movies.service';

describe('HomeMoviesService', () => {
  let service: HomeMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
