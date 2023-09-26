import { Component } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent {
  constructor(private _movies: MoviesApiService) {}

  ngOnInit() {
    this._movies.getMoviesList().subscribe((data) => console.log(data));
  }
}
