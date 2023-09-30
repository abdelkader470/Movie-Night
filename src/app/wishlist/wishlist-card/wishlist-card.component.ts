import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist-card',
  templateUrl: './wishlist-card.component.html',
  styleUrls: ['./wishlist-card.component.css'],
})
export class WishlistCardComponent {
  @Input() wishlist!: any;
  imgPrefex = 'https://image.tmdb.org/t/p/w500/';
}
