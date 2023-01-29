import { Observable } from 'rxjs';
import { PaginatorService } from '@services/paginator/paginator.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
    constructor(private paginator: PaginatorService) {}

    currentPage$: Observable<number> = this.paginator.currentPage$;
    totalpage$: Observable<number> = this.paginator.totalPage$;
    nextPage() {
        this.paginator.nextPage();
    }
    previousPage() {
        this.paginator.previusPage();
    }
}
