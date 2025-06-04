import { Component, computed, inject } from '@angular/core';
import { GestionProductsService } from '../../services/gestion-products.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private productSer = inject(GestionProductsService);
  totalPrice = computed(() => {
    let tabSelectionne = this.productSer
      .allProducts()
      .filter((p) => p.estSelectionne);

    return tabSelectionne.reduce((total, product) => total + product.prix, 0);
  });
  nbSelected = computed(() => {
    return this.productSer.allProducts().filter((p) => p.estSelectionne).length;
  });
}
