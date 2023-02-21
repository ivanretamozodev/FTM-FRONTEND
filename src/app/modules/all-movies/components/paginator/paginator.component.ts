import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() nextPageClick = new EventEmitter<void>();
  @Output() previusPageClick = new EventEmitter<void>();

  previusPage() {
    this.previusPageClick.emit();
  }
  nextPage() {
    this.nextPageClick.emit();
  }
}
