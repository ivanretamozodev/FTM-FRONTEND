import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Genre, GenreResponse } from '@core/interfaces/genre.interface';

@Injectable()
export class GenresMoviesService {
  private readonly baseUrl = environment.baseUrl;
  constructor(private _httpClient: HttpClient) {}
  getGenres() {
    return this._httpClient.get<GenreResponse>(`${this.baseUrl}/genres`).pipe(map((data) => data.genres));
  }
}
