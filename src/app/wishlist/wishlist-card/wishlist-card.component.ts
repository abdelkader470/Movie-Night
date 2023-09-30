import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MoviesApiService } from 'src/app/movies/services/movies-api.service';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css'],
})
export class WishlistCardComponent {
  @Input() wishlist!: any;
  inWatchlist = false;
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  myWishList: any[] = [];
  foundedwish!: any;
  constructor(private _router: Router, private _movieAPI: MoviesApiService ,private location:Location) {}

  ngOnInit() {
    if (!this.inWatchlist) {
      this._movieAPI.showwishList().subscribe((response) => {
        console.log('Response:', response.results);
        this.myWishList = response.results;
        this.foundedwish = this.myWishList.find(
          (res) => res.id === this.wishlist.id
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
      location.reload()
      
      }
  }
}
