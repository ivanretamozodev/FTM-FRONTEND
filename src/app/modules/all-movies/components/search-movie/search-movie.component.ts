import { Genre } from 'src/app/core/interfaces/genre.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss'],
})
export class SearchMovieComponent {
  @Input() genres: Genre[] = [];
  genreSelected: string = '';
}
