import { map, Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Genre, GenreResponse } from '@core/interfaces/genre.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private _httpClient: HttpClient) {}

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
    return this._httpClient.post(`${this.baseUrl}/movies`, body);
  }

  getAllGenres(): Observable<Genre[]> {
    return this._httpClient.get<GenreResponse>(`${this.baseUrl}/genres`).pipe(map((data) => data.genres));
  }
}
