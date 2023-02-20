import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { SesionGuard } from '@core/guards/sesion.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [SesionGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'movies',
    loadChildren: () => import('./modules/all-movies/all-movies.module').then((m) => m.AllMoviesModule),
  },
  {
    path: 'movie/:id',
    loadChildren: () => import('./modules/details-movies/details-movies.module').then((m) => m.DetailsMoviesModule),
  },
  {
    path: 'genres',
    loadChildren: () => import('./modules/genres-movies/genres-movies.module').then((m) => m.GenresMoviesModule),
  },
  {
    path: 'help',
    loadChildren: () => import('./modules/help-movies/help-movies.module').then((m) => m.HelpMoviesModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home-movies/home-movies.module').then((m) => m.HomeMoviesModule),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
