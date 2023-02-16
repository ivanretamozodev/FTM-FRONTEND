import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination, SwiperOptions } from 'swiper';
import { MovieFeatured, MovieSoftDetail } from 'src/app/core/interfaces/movies.interface';

SwiperCore.use([Autoplay, Pagination]);
import { HomeMoviesService } from './../services/home-movies.service';

SwiperCore.use([Autoplay, Pagination]);

@Component({
  selector: 'app-home-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageComponent implements OnInit, OnDestroy {
  constructor(private _moviesService: HomeMoviesService) {}
  movies: MovieSoftDetail[] = [];
  featuredMovies: MovieFeatured[] = [];
  valoratedMovies: MovieFeatured[] = [];
  UltraHdMovies: MovieSoftDetail[] = [];
  listObservers$: Subscription[] = [];
  Genre: string = '63d71ab43f8be04e09937be2';

  ngOnInit(): void {
    const observer1$: Subscription = this._moviesService.getMovies().subscribe((resp) => (this.movies = resp));
    const observer2$: Subscription = this._moviesService
      .getFeaturedMovies()
      .subscribe((resp) => (this.featuredMovies = resp));
    const observer3$: Subscription = this._moviesService
      .getValoratedMovies()
      .subscribe((resp) => (this.valoratedMovies = resp));
    const observer4$ = this._moviesService
      .getMoviesByGenre(10, this.Genre)
      .subscribe((resp) => (this.UltraHdMovies = resp));
    this.listObservers$.push(observer1$, observer2$, observer3$);
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((observer) => observer.unsubscribe());
  }
}
