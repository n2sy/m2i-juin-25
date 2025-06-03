import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private listeCandidats: Candidat[] = [
    new Candidat('1', 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat('2', 'homer', 'simpson', 54, 'chef de projet', 'homer.png'),
    new Candidat('3', 'lisa', 'simpson', 32, 'designer UI', 'lisa.png'),
    new Candidat('4', 'nidhal', 'jelassi', 40, 'formateur'),
  ];

  getAllCandidats() {
    return this.listeCandidats;
  }

  ajouterCandidat() {
    this.listeCandidats.push(
      new Candidat('5', 'NEW', 'CANDIDAT', 40, 'formateur')
    );
  }

  chercherCandidatParId(selectedId) {
    return this.listeCandidats.find((cand) => cand._id == selectedId);
  }

  constructor() {}
}
