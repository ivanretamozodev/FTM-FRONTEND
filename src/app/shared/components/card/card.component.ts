import { AllMovies } from './../../../interfaces/movies.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Input() movie!: AllMovies | null;
    constructor() {}
}
