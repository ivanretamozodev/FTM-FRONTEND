import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsMoviesRoutingModule } from './details-movies-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    DetailsMoviesRoutingModule
  ]
})
export class DetailsMoviesModule { }
