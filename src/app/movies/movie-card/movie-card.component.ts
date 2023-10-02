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
  myWishList: any[] = [];
  foundedwish!: any;
  counter!:number
  constructor(private _router: Router, private _movieAPI: MoviesApiService) {}
  ngOnInit() {
    this.progress = this.movie.vote_average * 10;
    if (!this.inWatchlist) {
      this._movieAPI.showwishList().subscribe((response) => {
        console.log('Response:', response.results);
        this.myWishList = response.results;
        this.counter = this.myWishList.length;
        this._movieAPI.setCounter(this.counter);
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
    this._movieAPI.getcounter().subscribe((data)=>{
      this.counter =data;
    })
    if (this.inWatchlist) {
      this._movieAPI.addToWatchlist(movieId);
      this.counter++
      this._movieAPI.setCounter(this.counter)
    } else {
      this._movieAPI.removeFromWatchlist(movieId);
      this.counter--
      this._movieAPI.setCounter(this.counter)
    }
  }
}

