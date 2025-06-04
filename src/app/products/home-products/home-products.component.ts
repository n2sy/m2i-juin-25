import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ListeProductsComponent } from '../liste-products/liste-products.component';

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [DashboardComponent, AddProductComponent, ListeProductsComponent],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css',
})
export class HomeProductsComponent {}
