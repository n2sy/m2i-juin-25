import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  //providers: [GestionCandidatsService],
})
export class ListeComponent {
  tabCands: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (response: Candidat[]) => {
        this.tabCands = response;
      },
      error: (err) => {
        alert('Connexion impossible...Données fictives chargées');
        this.tabCands = this.candSer.getAllCandidats();
      },
    });
  }

  sendCandToCv(cand) {
    this.eventToCv.emit(cand);
  }

  affichageListCandidats() {
    console.log(this.candSer.getAllCandidats());
  }
}
