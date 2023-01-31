import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MovieResponse, MovieDetailResponse, MovieFeaturedResponse } from '@interfaces/movies.interface';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getMovies = (limit: number = 10) => {
        return this.http.get<MovieResponse>(`${this.baseUrl}/movies?limit=${limit}`).pipe(map((data) => data.movies));
    };
    getValoratedMovies = (limit: number = 10) => {
        return this.http
            .get<MovieFeaturedResponse>(`${this.baseUrl}/movies/valorated?limit=${limit}`)
            .pipe(map((data) => data.results));
    };

    getMoviesDetails = (id: string) => {
        return this.http.get<MovieDetailResponse>(`${this.baseUrl}/movies/${id}`).pipe(map((data) => data.results));
    };

    getFeaturedMovies = () => {
        return this.http
            .get<MovieFeaturedResponse>(`${this.baseUrl}/movies/featured`)
            .pipe(map((data) => data.results));
    };
}
