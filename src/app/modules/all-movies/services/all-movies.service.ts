import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Genre, GenreResponse } from '@core/interfaces/genre.interface';
import { MovieResponse } from '@core/interfaces/movies.interface';

@Injectable()
export class AllMoviesService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {}

  getMovies = (page: number = 1, limit: number = 14, genre?: string) => {
    return this._httpClient.get<MovieResponse>(
      `${this.baseUrl}/movies${genre ? '/genres' : ''}?page=${page}&genre=${genre}&limit=${limit}`
    );
  };

  getGenreById(id: string) {
    return this._httpClient.get<Genre>(`${this.baseUrl}/genres/${id}`);
  }

  searchMovie() {}

  getGenres(limit: number = 14) {
    return this._httpClient
      .get<GenreResponse>(`${this.baseUrl}/genres?limit=${limit}`)
      .pipe(map((data) => data.genres));
  }
}
