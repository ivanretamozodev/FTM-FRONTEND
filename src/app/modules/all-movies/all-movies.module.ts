import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllMoviesService } from './services/all-movies.service';
import { AllMoviesRoutingModule } from './all-movies-routing.module';
import { PageComponent } from './page/page.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

@NgModule({
  declarations: [PageComponent, SearchMovieComponent],
  imports: [CommonModule, AllMoviesRoutingModule, FormsModule, SharedModule],
  providers: [AllMoviesService],
})
export class AllMoviesModule {}
