import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesApiService } from 'src/app/movies/services/movies-api.service';
import { Movie } from 'src/app/movies/iterface/movie';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css'],
})
export class WishlistCardComponent {
  @Input() wishlist!: Movie;
  inWatchlist = true;
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  myWishList: Movie[] = [];
  foundedwish!: any;
  constructor(
    private _router: Router,
    private _movieAPI: MoviesApiService,
    private location: Location
  ) {}

  ngOnInit() {
    
  }
  routingToDetails(id: number) {
    this._router.navigate(['movie', id]);
    this._movieAPI.setMovie(id);
  }

  addToWatchList(movieId: number) {
    this.inWatchlist = !this.inWatchlist;
  
      this._movieAPI.removeFromWatchlist(movieId);
      location.reload();
    
  }
}
