import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie, MovieDetailResponse } from '@core/interfaces/movies.interface';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getMovieDetails(id: string): Observable<Movie> {
    return this.http.get<MovieDetailResponse>(`${this.baseUrl}/movies/${id}`).pipe(map((data) => data.results));
  }
}
