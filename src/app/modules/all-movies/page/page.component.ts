import { Subscription } from 'rxjs';
import { MovieSoftDetail } from 'src/app/core/interfaces/movies.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AllMoviesService } from '../services/all-movies.service';
import { Genre } from '@core/interfaces/genre.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
  genres: Genre[] = [];
  movies: MovieSoftDetail[] = [];
  currentPage: number = 1;
  totalPages: number | undefined;
  listObservables$: Subscription[] | undefined;
  constructor(private _movieService: AllMoviesService) {}
  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
  }

  getMovies() {
    const observer1$: Subscription = this._movieService
      .getMovies()
      .subscribe((_movies) => (this.movies = _movies.movies));
    this.listObservables$ = [observer1$];
  }

  getGenres() {
    const observer2$: Subscription = this._movieService.getGenres().subscribe((genres) => (this.genres = genres));
    this.listObservables$?.push(observer2$);
  }

  onSelectedGenre(genre: string) {
    this._movieService.getMovies(this.currentPage, genre, 14).subscribe((data) => {
      this.currentPage = data.currentPage;
      this.totalPages = data.totalPages;
      this.movies = data.movies;
    });
  }

  onSearch(term: string) {
    console.log('desde el padre', term);
  }

  ngOnDestroy(): void {
    this.listObservables$?.forEach((observer) => observer.unsubscribe());
  }
}
