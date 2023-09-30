import { Component } from '@angular/core';
import { MoviesApiService } from '../services/movies-api.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/search/services/search.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css'],
})
export class AllMoviesComponent {
  pages: number[] = [];
  pageNumber: number = 1;
  maxPages: number = 15;
  searchKey: string = '';
  constructor(
    private _movies: MoviesApiService,
    private _router: Router,
    private _search: SearchService
  ) {}
  allMovies: any[] = [];
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this._movies.getMoviesList(this.pageNumber).subscribe({
      next: (res) => {
        this.allMovies = res.results;
        this.pages = new Array(Math.min(res.total_pages, this.maxPages))
          .fill('')
          .map((x, i) => i + 1);
      },
    });
    // (data: any) => (this.allMovies = data.results);
  }
  show(pageNum: number) {
    this.pageNumber = pageNum;
    this.fetchData();
  }

  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.fetchData();
    }
  }

  nextPage() {
    if (this.pageNumber < this.pages.length) {
      this.pageNumber++;
      this.fetchData();
    }
  }

  search() {
    this._router.navigate(['search']);
    this._search.setSearchKey(this.searchKey);
  }
}
