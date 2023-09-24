import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieWishlistComponent } from './movie-wishlist/movie-wishlist.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AllMoviesComponent,
    MovieCardComponent,
    MovieWishlistComponent,
    MovieDetailsComponent,
  ],
  imports: [CommonModule],
  exports: [
    AllMoviesComponent,
    MovieCardComponent,
    MovieWishlistComponent,
    MovieDetailsComponent,
  ],
})
export class MoviesModule {}
