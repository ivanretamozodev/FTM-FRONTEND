import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresMoviesService } from './services/genres-movies.service';
import { GenresMoviesRoutingModule } from './genres-movies-routing.module';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, GenresMoviesRoutingModule],
  providers: [GenresMoviesService],
})
export class GenresMoviesModule {}
