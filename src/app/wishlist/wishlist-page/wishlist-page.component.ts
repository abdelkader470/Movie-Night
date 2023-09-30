import { Component } from '@angular/core';
import { MoviesApiService } from 'src/app/movies/services/movies-api.service';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.css'],
})
export class WishlistPageComponent {
  constructor(private _movieAPI: MoviesApiService) {}
  myWishList:any[] = [];
  ngOnInit() {
    this._movieAPI.showwishList().subscribe(
      (response) => {
        console.log('Response:', response.results);
        this.myWishList = response.results;
        // Handle the successful response here
      },
      (error) => {
        console.error('Error:', error);
        // Handle the error here
      }
    );
  }
}
