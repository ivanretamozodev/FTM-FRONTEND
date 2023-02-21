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
  totalPages: number = 1;
  limit = 14;
  genreSelected: string = '';
  genreName: string = '';
  showGenre: boolean = false;
  listObservables$: Subscription[] | undefined;
  constructor(private _movieService: AllMoviesService) {}
  ngOnInit(): void {
    this.getMovies(this.currentPage, this.limit);
    this.getGenres();
  }

  /*
   * Get movies sera llamado en el inicio del componente,la funcion se encarga de mostrar todas las peliculas asignando el total de peliculas
   *la pagina la cual nos encontramos,guardando sus valores en sus respectivas variables
   */

  getMovies(page: number, limit: number, genre?: string): void {
    const observer1$: Subscription = this._movieService.getMovies(page, limit, genre).subscribe((data) => {
      this.currentPage = data.currentPage;
      this.totalPages = data.totalPages;
      this.movies = data.movies;
    });
    this.listObservables$ = [observer1$];
  }

  /*
   * getGenres() se ocupa de consultar la lista de generos en la api y mostrarlos en su respectivo select en el dom,asi el usuario puede
   *elegir el genero que asi lo desea
   */

  getGenres(): void {
    const observer2$: Subscription = this._movieService.getGenres().subscribe((genres) => (this.genres = genres));
    this.listObservables$?.push(observer2$);
  }

  getGenreName() {
    this._movieService.getGenreById(this.genreSelected).subscribe((data) => {
      this.showGenre = true;
      this.genreName = data.name;
    });
  }

  onSelectedGenre(genre: string): void {
    this._movieService.getMovies(1, 14, genre).subscribe((data) => {
      this.genreSelected = genre;
      this.currentPage = data.currentPage;
      this.totalPages = data.totalPages;
      this.movies = data.movies;
      this.getGenreName();
    });
  }

  onSearch(term: string): void {
    console.log('desde el padre', term);
  }

  onNextPage(): void {
    if (this.currentPage >= this.totalPages) {
      return;
    }
    this.currentPage++;
    this.getMovies(this.currentPage, this.limit, this.genreSelected);
  }

  onPreviusPage(): void {
    if (this.currentPage <= 1) {
      return;
    }
    this.currentPage--;
    this.getMovies(this.currentPage, this.limit, this.genreSelected);
  }

  ngOnDestroy(): void {
    this.listObservables$?.forEach((observer) => observer.unsubscribe());
  }
}
