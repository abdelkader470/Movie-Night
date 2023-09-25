import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
  ],
  imports: [CommonModule, RouterLink],
  exports: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    SearchComponent,
  ],
})
export class SharedModule {}
