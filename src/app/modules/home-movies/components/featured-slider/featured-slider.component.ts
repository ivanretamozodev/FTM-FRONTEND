import { Component, Input } from '@angular/core';
import { MovieFeatured } from '@core/interfaces/movies.interface';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-featured-slider',
  templateUrl: './featured-slider.component.html',
  styleUrls: ['./featured-slider.component.scss'],
})
export class FeaturedSliderComponent {
  @Input() featuredMovies: MovieFeatured[] = [];
  @Input() title: string = '';
  configFeatures: SwiperOptions = {
    slidesPerView: 0.79,
    spaceBetween: 5,
    navigation: true,
    breakpoints: {
      '540': {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      '576': {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      '992': {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
      '1200': {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      '1400': {
        slidesPerView: 3.1,
        spaceBetween: 20,
      },
    },
    pagination: { clickable: true },
    autoplay: true,
  };
}
