import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWishlistComponent } from './movie-wishlist.component';

describe('MovieWishlistComponent', () => {
  let component: MovieWishlistComponent;
  let fixture: ComponentFixture<MovieWishlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieWishlistComponent]
    });
    fixture = TestBed.createComponent(MovieWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
