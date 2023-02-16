import { Component, Input } from '@angular/core';

import { MovieFeatured } from '@core/interfaces/movies.interface';
@Component({
  selector: 'app-featured-card',
  templateUrl: './featured-card.component.html',
  styleUrls: ['./featured-card.component.scss'],
})
export class FeaturedCardComponent {
  @Input() movieFeatured!: MovieFeatured;
}
