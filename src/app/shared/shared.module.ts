import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchMoviePipe } from '../search-movie.pipe';
@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
    SearchMoviePipe,
  ],
  imports: [CommonModule, RouterLink, HttpClientModule, FormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
