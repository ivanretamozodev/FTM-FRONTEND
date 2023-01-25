import { Movie, MovieResponse, AllMovies, MovieDetailResponse } from './../../interfaces/movies.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getMovies = () => {
        return this.http.get<MovieResponse>(`${this.baseUrl}/movies`).pipe(map((data) => data.results));
    };

    getMoviesDetails = (id: string) => {
        return this.http.get<MovieDetailResponse>(`${this.baseUrl}/movies/${id}`).pipe(map((data) => data.results));
    };
}
