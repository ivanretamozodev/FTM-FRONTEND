import { Genre } from 'src/app/core/interfaces/genre.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent {
  @Input() genres: Genre[] = [];
  @Output() selectedGenre = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
  genreSelected: string = '';
  term: string = '';
  eventGenre() {
    this.selectedGenre.emit(this.genreSelected);
  }

  src() {
    if (this.term.length > 5) {
      this.search.emit(this.term);
    }
  }
}
