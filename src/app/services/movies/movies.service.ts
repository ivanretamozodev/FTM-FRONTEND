import { Genre } from '@interfaces/genre.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, BehaviorSubject, catchError } from 'rxjs';
import { MovieResponse, MovieDetailResponse, MovieFeaturedResponse } from '@interfaces/movies.interface';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    uploadMovie(
        name: string,
        year: string,
        genres: Genre[],
        rating: number,
        posterImage: string,
        description: string,
        featured: boolean,
        link: string
    ) {
        const body = { name, year, genres, rating, posterImage, description, featured, link };
        return this.http.post(`${this.baseUrl}/movies`, body);
    }

    getMovies = (limit: number = 10) => {
        return this.http.get<MovieResponse>(`${this.baseUrl}/movies?limit=${limit}`).pipe(map((data) => data.movies));
    };

    getMoviesByGenre(page: number = 1, genre: string) {
        return this.http
            .get<MovieResponse>(`${this.baseUrl}/movies/genres?page${page}&genre=${genre}}`)
            .pipe(map((data) => data.movies));
    }
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
