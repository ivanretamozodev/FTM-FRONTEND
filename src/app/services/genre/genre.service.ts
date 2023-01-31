import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GenreResponse } from '@interfaces/genre.interface';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GenreService {
    baseUrl: string = environment.baseUrl;
    constructor(private http: HttpClient) {}

    getAllGenres() {
        return this.http
            .get<GenreResponse>(`${this.baseUrl}/genres`)
            .pipe(map((genreResponse) => genreResponse.genres));
    }
}
