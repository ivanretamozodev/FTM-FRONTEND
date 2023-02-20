import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DetailsService } from './../services/details-movies.service';
import { Subscription } from 'rxjs';
import { Movie } from '@core/interfaces/movies.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
  movie!: Movie | null;
  listObservers$: Subscription[] = [];

  constructor(
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _detailsService: DetailsService
  ) {}

  ngOnInit(): void {
    //obtenemos el id
    this._activatedRoute.params.subscribe(({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    const observer$: Subscription = this._detailsService.getMovieDetails(id).subscribe((movie) => (this.movie = movie));
    this.listObservers$.push(observer$);
  }

  toDownload() {
    const url = this.movie?.link;
    window.open(url, '_blank');
  }

  goBack() {
    this._location.back();
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((observer) => observer.unsubscribe());
  }
}
