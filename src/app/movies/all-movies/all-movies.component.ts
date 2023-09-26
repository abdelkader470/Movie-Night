import { Component } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent {
  constructor(private _movies: MoviesApiService) {}
  allMovies: any[] = [];
  ngOnInit() {
    this._movies
      .getMoviesList()
      .subscribe((data: any) => (this.allMovies = data.results));
  }
}
