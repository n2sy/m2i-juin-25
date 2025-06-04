import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProductsComponent } from './liste-products.component';

describe('ListeProductsComponent', () => {
  let component: ListeProductsComponent;
  let fixture: ComponentFixture<ListeProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
