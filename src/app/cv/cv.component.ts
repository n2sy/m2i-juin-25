import { Component } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailsComponent } from '../details/details.component';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailsComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat('1', 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat('2', 'homer', 'simpson', 54, 'chef de projet', 'homer.png'),
    new Candidat('3', 'lisa', 'simpson', 32, 'designer UI', 'lisa.png'),
  ];
  selectedCandidat: Candidat;

  recupererCandidatClique(cand) {
    this.selectedCandidat = cand;
  }
}
