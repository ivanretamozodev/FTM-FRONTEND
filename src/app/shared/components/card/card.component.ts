import { MovieSoftDetail } from '../../../core/interfaces/movies.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() movie!: MovieSoftDetail | null;
  constructor() {}
}
