import { effect, Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class GestionProductsService {
  allProducts = signal<Product[]>([]);

  constructor() {
    this.allProducts.set([
      new Product('1', 'Produit 1', 120, false),
      new Product('2', 'Produit 2', 200, true),
      new Product('3', 'Produit 3', 430, false),
    ]);

    effect(() => {
      console.log('Nouvelles valeurs du signal', this.allProducts());
    });
  }

  updateProduct(idProduct) {
    let i = this.allProducts().findIndex((p) => p.id == idProduct);
    this.allProducts.update((previous) => {
      previous[i].estSelectionne = !previous[i].estSelectionne;
      return [...previous];
    });
  }

  addProduct(newProduct) {
    newProduct.id = crypto.randomUUID().slice(0, 2);
    this.allProducts.update((previous) => {
      // previous.push(newProduct);
      return [...previous, newProduct];
    });
  }

  deleteProduct(idProduct) {
    this.allProducts.update((previous) => {
      return previous.filter((p) => p.id != idProduct);
    });
  }
}
