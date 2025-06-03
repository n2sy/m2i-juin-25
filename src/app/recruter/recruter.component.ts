import { Component, inject } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { Candidat } from '../models/candidat';
import { ListeComponent } from '../liste/liste.component';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-recruter',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css',
})
export class RecruterComponent {
  tab: Candidat[] = [];
  private recrueSer = inject(GestionRecruesService);

  ngOnInit() {
    this.tab = this.recrueSer.getAllRecrues();
  }
}
