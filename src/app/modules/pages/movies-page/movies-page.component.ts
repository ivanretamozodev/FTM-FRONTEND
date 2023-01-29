import { Component, OnInit } from '@angular/core';
import { MovieSoftDetail } from '@interfaces/movies.interface';
import { MoviesService } from '@services/movies/movies.service';

@Component({
    selector: 'app-movies-page',
    templateUrl: './movies-page.component.html',
    styleUrls: ['./movies-page.component.scss'],
})
export class MoviesPageComponent implements OnInit {
    movies: MovieSoftDetail[] = [];
    constructor(private _moviesService: MoviesService) {}
    ngOnInit(): void {
        this._moviesService.getMovies(1, 21).subscribe((resp) => (this.movies = resp));
    }
}
