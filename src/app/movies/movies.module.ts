import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AllMoviesComponent, MovieCardComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 8,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 0,
      showSubtitle: false,
      backgroundColor: '#000',
      unitsFontSize: '4',
      unitsColor: '#ffffff',
      titleFontSize: '8',
      titleColor: '#ffffff',
    }),
  ],
  exports: [AllMoviesComponent, MovieCardComponent, MovieDetailsComponent],
})
export class MoviesModule {}
