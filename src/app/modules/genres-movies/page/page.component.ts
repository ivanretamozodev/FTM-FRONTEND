import { Component, OnInit } from '@angular/core';
import { Genre } from '@core/interfaces/genre.interface';
import { GenresMoviesService } from './../services/genres-movies.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  genres: Genre[] = [];
  constructor(private _genresService: GenresMoviesService) {}
  ngOnInit(): void {
    this.getGenres();
  }

  getGenres() {
    this._genresService.getGenres().subscribe((genres) => (this.genres = genres));
  }
}
