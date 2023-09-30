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
  myWishList: any[] = [];
  foundedwish!: any;
  constructor(
    private _link: ActivatedRoute,
    private _movieAPI: MoviesApiService
  ) {}
  @Input() changed: any;
  ngOnInit() {
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
  ngOnChanges() {
    this.movieID = this._link.snapshot.params['id'];

    this._movieAPI.recommendedMovies(this.movieID).subscribe((data: any) => {
      this.recommendedMovies = data.results;
    });
    this._movieAPI.getMovieDetail(this.movieID).subscribe((data) => {
      this.movie = data;
    });
  }

  addToWatchList(movieId: number) {
    this.inWatchlist = !this.inWatchlist;
     if(this.inWatchlist){
    this._movieAPI.addToWatchlist(movieId)
  }else{
    this._movieAPI.removeFromWatchlist(movieId)

  }
    }
  }

