import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private movie;
  foundedMovie!: any;
  constructor(private _http: HttpClient) {
    this.movie = new BehaviorSubject({});
  }
  getMoviesList(pageNumber: number): Observable<any> {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=b6bf914c5259361379673d87ba12221b&page=${pageNumber}`
    );
  }

  getMovieDetail(id: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }

  recommendedMovies(id: number) {
    return this._http.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b6bf914c5259361379673d87ba12221b`
    );
  }

  getMovie() {
    return this.movie.asObservable();
  }
  setMovie(movie: number) {
    this.movie.next(movie);
  }
  addToWatchlist(movieId: number) {
    const url = 'https://api.themoviedb.org/3/account/20505794/watchlist'; // Replace with the appropriate URL
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: true,
    };

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2YxY2U1ODUzNjdkMjIwNTE4YzIxYTA3NzA4OGIxMiIsInN1YiI6IjY1MTVlZWU5ZDQ2NTM3MDEwMDFiMWQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xiy3NtzMyacFesL7uRITqTDjyrlR-RAD7OIhpjGPqSk'
      );

    this._http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  removeFromWatchlist(movieId: number) {
    const url = 'https://api.themoviedb.org/3/account/20505794/watchlist'; // Replace with the appropriate URL
    const body = {
      media_type: 'movie',
      media_id: movieId,
      watchlist: false,
    };

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2YxY2U1ODUzNjdkMjIwNTE4YzIxYTA3NzA4OGIxMiIsInN1YiI6IjY1MTVlZWU5ZDQ2NTM3MDEwMDFiMWQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xiy3NtzMyacFesL7uRITqTDjyrlR-RAD7OIhpjGPqSk'
      );

    this._http.post(url, body, { headers }).subscribe(
      (response) => {
        console.log('Response:', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  showwishList(): Observable<any> {
    const url =
      'https://api.themoviedb.org/3/account/20505794/watchlist/movies'; // Replace with the appropriate URL

    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set(
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2YxY2U1ODUzNjdkMjIwNTE4YzIxYTA3NzA4OGIxMiIsInN1YiI6IjY1MTVlZWU5ZDQ2NTM3MDEwMDFiMWQ2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xiy3NtzMyacFesL7uRITqTDjyrlR-RAD7OIhpjGPqSk'
      );

    const params = new HttpParams()
      .set('language', 'en-US')
      .set('page', '1')
      .set('sort_by', 'created_at.asc');

    return this._http.get(url, { headers, params });
  }
}
