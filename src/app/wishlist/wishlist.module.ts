import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { WishlistCardComponent } from './wishlist-card/wishlist-card.component';

@NgModule({
  declarations: [WishlistPageComponent, WishlistCardComponent],
  imports: [CommonModule],
  exports: [WishlistPageComponent, WishlistCardComponent],
})
export class WishlistModule {}
