import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMoviesRoutingModule } from './all-movies-routing.module';
import { PageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageComponent, SearchMovieComponent],
  imports: [CommonModule, AllMoviesRoutingModule, FormsModule, SharedModule],
})
export class AllMoviesModule {}
