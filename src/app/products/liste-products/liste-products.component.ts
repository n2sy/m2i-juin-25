import { Component, inject } from '@angular/core';
import { GestionProductsService } from '../../services/gestion-products.service';
import { CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-liste-products',
  standalone: true,
  imports: [NgClass, CurrencyPipe],
  templateUrl: './liste-products.component.html',
  styleUrl: './liste-products.component.css',
})
export class ListeProductsComponent {
  public productsSer = inject(GestionProductsService);
}
