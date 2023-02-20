import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { MovieResponse, MovieDetailResponse, MovieFeaturedResponse } from 'src/app/core/interfaces/movies.interface';

@Injectable()
export class HomeMoviesService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getMovies = (limit: number = 10) => {
    return this.http.get<MovieResponse>(`${this.baseUrl}/movies?limit=${limit}`).pipe(map((data) => data.movies));
  };

  /*
   * GET /MOVIES/GENRES
   * este endpoint retorna las peliculas por generos
   */

  getMoviesByGenre(limit: number, genre: string) {
    return this.http
      .get<MovieResponse>(`${this.baseUrl}/movies/genres?limit=${limit}&genre=${genre}`)
      .pipe(map((data) => data.movies));
  }
  getValoratedMovies = (limit: number = 10) => {
    return this.http
      .get<MovieFeaturedResponse>(`${this.baseUrl}/movies/valorated?limit=${limit}`)
      .pipe(map((data) => data.results));
  };

  getFeaturedMovies = () => {
    return this.http.get<MovieFeaturedResponse>(`${this.baseUrl}/movies/featured`).pipe(map((data) => data.results));
  };
}
