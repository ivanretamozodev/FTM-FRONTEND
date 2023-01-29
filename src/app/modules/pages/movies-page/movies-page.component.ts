import { MovieSoftDetail } from '@interfaces/movies.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
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
    constructor(private _paginatorService: PaginatorService) {
        this._paginatorService.getAllMoviesPaginated(this.currentPage$, this.limit).subscribe();
        this.movies$ = this._paginatorService.movies$;
        this.currentPage$ = this._paginatorService.currentPage$;
    }
}
