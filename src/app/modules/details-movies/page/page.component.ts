import { DetailsService } from './../services/details-movies.service';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '@core/interfaces/movies.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  movie!: Movie | null;

  constructor(private _activatedRoute: ActivatedRoute, private _detailsService: DetailsService) {}

  ngOnInit(): void {
    //obtenemos el id
    this._activatedRoute.params.subscribe(({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(id: string) {
    this._detailsService.getMovieDetails(id).subscribe((movie) => (this.movie = movie));
  }

  toDownload() {
    const url = this.movie?.link;
    window.open(url, '_blank');
  }
}
