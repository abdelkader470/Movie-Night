import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesApiService } from 'src/app/movies/services/movies-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  counter!: number;
  counterSubscription!: Subscription;
  constructor(private _movieAPI: MoviesApiService) {}
  ngOnInit() {
    this._movieAPI.getcounter().subscribe((data)=>{
      this.counter =data
    })


    this.counterSubscription = this._movieAPI.counterChanged.subscribe(
      (newCounter: number) => {
        this.counter = newCounter;
    
      }
    );
  }
}
