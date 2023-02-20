import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GenreResponse } from '@core/interfaces/genre.interface';
import { MovieResponse } from '@core/interfaces/movies.interface';

@Injectable()
export class AllMoviesService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {}

  getMovies = (page: number = 1, genre?: string, limit: number = 14) => {
    return this._httpClient.get<MovieResponse>(
      `${this.baseUrl}/movies${genre ? '/genres' : ''}?page=1&genre=${genre}&limit=${limit}`
    );
  };

  searchMovie() {}

  getGenres() {
    return this._httpClient.get<GenreResponse>(`${this.baseUrl}/genres`).pipe(map((data) => data.genres));
  }
}
