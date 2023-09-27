import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsChildShowComponent } from './details-child-show.component';

describe('DetailsChildShowComponent', () => {
  let component: DetailsChildShowComponent;
  let fixture: ComponentFixture<DetailsChildShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsChildShowComponent]
    });
    fixture = TestBed.createComponent(DetailsChildShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
