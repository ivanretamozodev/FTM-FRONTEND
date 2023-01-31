import { Genre } from './../../../interfaces/movies.interface';
import { GenreService } from '@services/genre/genre.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-genres-page',
    templateUrl: './genres-page.component.html',
    styleUrls: ['./genres-page.component.scss'],
})
export class GenresPageComponent implements OnInit {
    genres: Genre[] = [];
    constructor(private _genreService: GenreService) {}

    ngOnInit() {
        this._genreService.getAllGenres().subscribe((genres) => (this.genres = genres));
    }
}
