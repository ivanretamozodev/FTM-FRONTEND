import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map, retry } from 'rxjs';
import { Movie, MovieDetailResponse } from '@core/interfaces/movies.interface';

@Injectable()
export class DetailsService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getMovieDetails(id: string): Observable<Movie> {
    return this.http.get<MovieDetailResponse>(`${this.baseUrl}/movies/${id}`).pipe(
      retry(2),
      map((data) => data.results)
    );
  }
}
