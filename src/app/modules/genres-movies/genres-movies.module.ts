import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenresMoviesRoutingModule } from './genres-movies-routing.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    GenresMoviesRoutingModule
  ]
})
export class GenresMoviesModule { }
