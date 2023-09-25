import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [AllMoviesComponent, MovieCardComponent, MovieDetailsComponent],
  imports: [CommonModule],
  exports: [AllMoviesComponent, MovieCardComponent, MovieDetailsComponent],
})
export class MoviesModule {}
