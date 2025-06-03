import { Component, inject } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  // Maniere 1 d'injecter un service
  //constructor(private firstSer: FirstService) {}

  // Manière 2 d'injecter un service
  private firstSer = inject(FirstService);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.firstSer.sePresenter();
    this.tabCandidats = this.candSer.getAllCandidats();
  }

  addCandidat() {
    this.candSer.ajouterCandidat();
  }

  recupererCandidatClique(cand) {
    this.selectedCandidat = cand;
  }

  affichageListCandidats() {
    console.log(this.candSer.getAllCandidats());
  }
}
