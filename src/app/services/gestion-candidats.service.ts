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

  addCandidat(newCandidat) {
    newCandidat._id =
      this.listeCandidats[this.listeCandidats.length - 1]._id + 1;
    this.listeCandidats.push(newCandidat);
  }

  updateCandidat(uCandidat) {
    let i = this.listeCandidats.findIndex((cand) => cand._id == uCandidat._id);
    this.listeCandidats[i] = uCandidat;
  }

  deleteCandidat(id) {
    let i = this.listeCandidats.findIndex((cand) => cand._id == id);
    this.listeCandidats.splice(i, 1);
  }

  chercherCandidatParId(selectedId) {
    return this.listeCandidats.find((cand) => cand._id == selectedId);
  }

  constructor() {}
  ajouterCandidat() {
    this.listeCandidats.push(
      new Candidat('5', 'NEW', 'CANDIDAT', 40, 'formateur')
    );
  }
}
