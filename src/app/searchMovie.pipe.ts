import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMovie',
})
export class SearchMoviePipe implements PipeTransform {
  transform(trandingMovies: any[], term: string): any[] {
    return trandingMovies.filter((movie) =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
