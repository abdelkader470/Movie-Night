import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  changed: any;
  constructor(private _movieAPI: MoviesApiService) {}
  ngOnInit() {
    this._movieAPI.getMovie().subscribe((data) => {
      this.changed = data;
    });
  }
}
