import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  previusPage() {}
  nextPage() {}
}
