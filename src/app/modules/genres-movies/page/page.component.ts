import { Component } from '@angular/core';
import { Genre } from '@core/interfaces/genre.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  genres: Genre[] = [];
}
