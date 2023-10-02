import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MoviesApiService } from 'src/app/movies/services/movies-api.service';
import { Movie } from 'src/app/movies/iterface/movie';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css'],
})
export class WishlistPageComponent {
  constructor(private _movieAPI: MoviesApiService, private router: Router) {}
  myWishList: Movie[] = [];
  ngOnInit() {
    this._movieAPI.showwishList().subscribe(
      (response) => {
        this.myWishList = response.results;
        this._movieAPI.setCounter(this.myWishList.length)
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  gotohome() {
    this.router.navigate(['home']);
  }
}
