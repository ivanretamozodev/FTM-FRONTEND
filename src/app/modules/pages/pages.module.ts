import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

import { SharedModule } from '@shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { GenresPageComponent } from './genres-page/genres-page.component';
import { SearchComponent } from './movies-page/components/search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DetailsPageComponent,
        HomePageComponent,
        HelpPageComponent,
        MoviesPageComponent,
        GenresPageComponent,
        SearchComponent,
    ],
    imports: [CommonModule, PagesRoutingModule, SharedModule, SwiperModule, FormsModule],
})
export class PagesModule {}
