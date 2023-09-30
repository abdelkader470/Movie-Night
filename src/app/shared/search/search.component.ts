import { Component } from '@angular/core';
import { MoviesApiService } from 'src/app/movies/services/movies-api.service';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  prefixImg: string = 'https://image.tmdb.org/t/p/w500/';
  trandingMovies: any[] = [];
  term: string = '';

  pages: number[] = [];
  pageNumber: number = 1;
  maxPages: number = 15;
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
  progress: any;
  inWatchlist = false;

  constructor(
    private _MoviesService: MoviesApiService,
    private _search: SearchService
  ) {}
  ngOnInit() {
    this.fetchData();
    this._search.getSearchKey().subscribe((data) => (this.term = data));
  }

  fetchData() {
    this._MoviesService.getMoviesList(this.pageNumber).subscribe({
      next: (res) => {
        this.trandingMovies = res.results;
        this.pages = new Array(Math.min(res.total_pages, this.maxPages))
          .fill('')
          .map((x, i) => i + 1);
      },
    });
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
}
