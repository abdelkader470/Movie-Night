import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movies/iterface/movie';

@Pipe({
  name: 'searchMovie',
})
export class SearchMoviePipe implements PipeTransform {
  transform(trandingMovies: Movie[], term: string): any[] {
    return trandingMovies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
