import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SwiperModule } from 'swiper/angular';

import { HomeMoviesService } from './services/home-movies.service';
import { HomeMoviesRoutingModule } from './home-movies-routing.module';

import { SliderComponent } from './components/slider/slider.component';
import { FeaturedSliderComponent } from './components/featured-slider/featured-slider.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [PageComponent, SliderComponent, FeaturedSliderComponent],
  imports: [CommonModule, HomeMoviesRoutingModule, SwiperModule, SharedModule],
  providers: [HomeMoviesService],
})
export class HomeMoviesModule {}
