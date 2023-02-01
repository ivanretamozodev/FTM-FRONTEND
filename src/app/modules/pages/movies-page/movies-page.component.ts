import { Genre } from '@interfaces/genre.interface';
import { GenreService } from '@services/genre/genre.service';
import { MovieSoftDetail } from '@interfaces/movies.interface';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { PaginatorService } from '@services/paginator/paginator.service';

@Component({
    selector: 'app-movies-page',
    templateUrl: './movies-page.component.html',
    styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent {
    movies$!: Observable<MovieSoftDetail[]>;
    currentPage$!: Observable<number>;
    limit: number = this._paginatorService.limit;
    genres: Genre[] = [];
    constructor(private _paginatorService: PaginatorService, private _genreService: GenreService) {
        this._paginatorService.getAllMoviesPaginated(this.currentPage$, this.limit).subscribe();
        this.movies$ = this._paginatorService.movies$;
        this.currentPage$ = this._paginatorService.currentPage$;
        this._genreService.getAllGenres().subscribe((resp: Genre[]) => (this.genres = resp));
    }
}
