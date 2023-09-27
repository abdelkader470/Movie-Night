import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SearchComponent } from './shared/search/search.component';
import { WishlistPageComponent } from './wishlist/wishlist-page/wishlist-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AllMoviesComponent },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  { path: 'wishlist', component: WishlistPageComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
