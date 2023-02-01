import { PaginatorService } from '@services/paginator/paginator.service';
import { Genre } from '@interfaces/genre.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    constructor(private _paginatorService: PaginatorService) {}
    @Input() genres: Genre[] = [];
    genreSelected!: string;
    changes(event: any) {
        console.log(this.genreSelected);
        this._paginatorService
            .getAllMoviesPaginated(
                this._paginatorService.currentPage$.value,
                this._paginatorService.limit,
                this.genreSelected
            )
            .subscribe();
        this.genreSelected = '';
    }
}
