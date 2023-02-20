import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsMoviesRoutingModule } from './details-movies-routing.module';
import { PageComponent } from './page/page.component';
import { DetailsService } from './services/details-movies.service';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, DetailsMoviesRoutingModule],
  providers: [DetailsService],
})
export class DetailsMoviesModule {}
