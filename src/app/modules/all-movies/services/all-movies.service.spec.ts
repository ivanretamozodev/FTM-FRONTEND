import { TestBed } from '@angular/core/testing';

import { AllMoviesService } from './all-movies.service';

describe('AllMoviesService', () => {
  let service: AllMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
