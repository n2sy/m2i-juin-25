import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class GestionProductsService {
  allProducts = signal<Product[]>([]);

  constructor() {
    this.allProducts.set([
      new Product('1', 'Produit 1', 200, false),
      new Product('2', 'Produit 2', 200, false),
      new Product('3', 'Produit 3', 200, false),
    ]);
  }
}
