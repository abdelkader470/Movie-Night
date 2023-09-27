import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-details-child-show',
  templateUrl: './details-child-show.component.html',
  styleUrls: ['./details-child-show.component.css'],
})
export class DetailsChildShowComponent {
  movieID: number = 0;
  movie: any;
  recommendedMovies: any = [];
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  inWatchlist = false;
  constructor(
    private _link: ActivatedRoute,
    private _movieAPI: MoviesApiService
  ) {}
  @Input() changed: any;
  ngOnChanges() {
    this.movieID = this._link.snapshot.params['id'];

    this._movieAPI.recommendedMovies(this.movieID).subscribe((data: any) => {
      this.recommendedMovies = data.results;
    });
    this._movieAPI.getMovieDetail(this.movieID).subscribe((data) => {
      this.movie = data;
    });
  }
  addToWatchList(movie: any) {
    this.inWatchlist = !this.inWatchlist;
    console.log(this.inWatchlist);
  }
}
