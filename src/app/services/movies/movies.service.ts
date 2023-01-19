import { Movie } from './../../interfaces/movies.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    baseUrl: string = environment.baseUrl;
    constructor(private http: HttpClient) {}

    getMovies = () => {
        return this.http.get<Movie>(`${this.baseUrl}/movies`);
    };
}
