import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MoviesApiService {
  private movie;
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
  setMovie(movie: any) {
    this.movie.next(movie);
  }
}
