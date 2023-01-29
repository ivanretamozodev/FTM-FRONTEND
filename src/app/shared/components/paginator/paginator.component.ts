import { Observable } from 'rxjs';
import { PaginatorService } from '@services/paginator/paginator.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
    currentPage$: Observable<number> = this._paginatorService.currentPage$;
    totalpage$: Observable<number> = this._paginatorService.totalPage$;

    constructor(private _paginatorService: PaginatorService) {}

    nextPage() {
        this._paginatorService.nextPage();
    }
    previousPage() {
        this._paginatorService.previusPage();
    }
}
