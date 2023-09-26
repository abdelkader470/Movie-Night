import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  constructor(private _http: HttpClient) {}
  getMoviesList() {
    return this._http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=b6bf914c5259361379673d87ba12221b'
    );
  }
}
