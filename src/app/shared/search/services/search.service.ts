import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchKey;

  constructor() {
    this.searchKey = new BehaviorSubject('');
  }

  getSearchKey() {
    return this.searchKey.asObservable();
  }
  setSearchKey(movie: string) {
    this.searchKey.next(movie);
  }
}
