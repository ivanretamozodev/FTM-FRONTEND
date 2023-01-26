import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { SharedModule } from 'src/app/shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

@NgModule({
    declarations: [DetailsPageComponent, HomePageComponent, HelpPageComponent, MoviesPageComponent],
    imports: [CommonModule, PagesRoutingModule, SharedModule, SwiperModule],
})
export class PagesModule {}
