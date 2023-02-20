import { MovieSoftDetail } from 'src/app/core/interfaces/movies.interface';
import { Movie } from './../../../../core/interfaces/movies.interface';
import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
})
export class SliderComponent {
  @Input() movies: MovieSoftDetail[] = [];
  @Input() title: string = '';
  config: SwiperOptions = {
    slidesPerView: 1.9,
    spaceBetween: 5,
    navigation: true,
    breakpoints: {
      '540': {
        slidesPerView: 2.7,
        spaceBetween: 20,
      },
      '640': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 3.7,
        spaceBetween: 20,
      },
      '1200': {
        slidesPerView: 5.1,
        spaceBetween: 20,
      },
      '1400': {
        slidesPerView: 7,
        spaceBetween: 20,
      },
    },
    pagination: { clickable: true },
  };
}
