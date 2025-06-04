import { Component, inject } from '@angular/core';
import { GestionProductsService } from '../../services/gestion-products.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  public productsSer = inject(GestionProductsService);
}
