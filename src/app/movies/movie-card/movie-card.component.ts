import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  @Input() movie: any;
  progress: any;
  inWatchlist = false;
  constructor(private _router: Router, private _movieAPI: MoviesApiService) {}
  ngOnInit() {
    this.progress = this.movie.vote_average * 10;
  }
  routingToDetails(id: number) {
    this._router.navigate(['movie', id]);
    this._movieAPI.setMovie(id);
  }
  addToWatchList(movie: any) {
    this.inWatchlist = !this.inWatchlist;
  }
}
