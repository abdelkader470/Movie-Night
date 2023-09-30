import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../iterface/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  @Input() movie: Movie = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: {
      id: 0,
      name: '',
      poster_path: '',
      backdrop_path: '',
    },
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  };
  progress: number = 0;
  inWatchlist = false;
  myWishList: Movie[] = [];
  foundedwish!: any;
  constructor(private _router: Router, private _movieAPI: MoviesApiService) {}
  ngOnInit() {
    this.progress = this.movie.vote_average * 10;
    if (!this.inWatchlist) {
      this._movieAPI.showwishList().subscribe((response) => {
        console.log('Response:', response.results);
        this.myWishList = response.results;
        this.foundedwish = this.myWishList.find(
          (res) => res.id === this.movie.id
        );
        if (this.foundedwish) {
          this.inWatchlist = true;
        }
      });
    }
  }
  routingToDetails(id: number) {
    this._router.navigate(['movie', id]);
    this._movieAPI.setMovie(id);
  }

  addToWatchList(movieId: number) {
    this.inWatchlist = !this.inWatchlist;
    if (this.inWatchlist) {
      this._movieAPI.addToWatchlist(movieId);
    } else {
      this._movieAPI.removeFromWatchlist(movieId);
    }
  }
}
