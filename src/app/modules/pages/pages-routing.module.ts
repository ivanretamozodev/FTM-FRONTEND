import { MoviesPageComponent } from './movies-page/movies-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GenresPageComponent } from './genres-page/genres-page.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'home', component: HomePageComponent },
            { path: 'download/:id', component: DetailsPageComponent },
            { path: 'movies', component: MoviesPageComponent },
            { path: 'genres', component: GenresPageComponent },
            { path: 'help', component: HelpPageComponent },
            { path: '**', redirectTo: 'home' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
