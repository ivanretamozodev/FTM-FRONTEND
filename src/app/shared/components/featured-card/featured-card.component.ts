import { MovieFeatured } from './../../../interfaces/movies.interface';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-featured-card',
    templateUrl: './featured-card.component.html',
    styleUrls: ['./featured-card.component.scss'],
})
export class FeaturedCardComponent {
    @Input() movieFeatured!: MovieFeatured;
}
