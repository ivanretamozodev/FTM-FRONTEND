import { Movie } from './../../../interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../../services/movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-details-page',
    templateUrl: './details-page.component.html',
    styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
    id: string = '';
    movie!: Movie | null;

    constructor(private _movieService: MoviesService, private _activatedRoutes: ActivatedRoute) {}
    ngOnInit(): void {
        this._activatedRoutes.params.subscribe(({ id }) => {
            this.id = id;
        });
        this._movieService.getMoviesDetails(this.id).subscribe((data) => {
            this.movie = data;
        });
    }

    toDownload() {
        const url = this.movie?.link;
        window.open(url, '_blank');
    }
}
