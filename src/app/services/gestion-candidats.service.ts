import { inject, Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private http = inject(HttpClient);
  link = 'http://localhost:3000/cv/candidats';
  private listeCandidats: Candidat[] = [
    new Candidat('1', 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat('2', 'homer', 'simpson', 54, 'chef de projet', 'homer.png'),
    new Candidat('3', 'lisa', 'simpson', 32, 'designer UI', 'lisa.png'),
    new Candidat('4', 'nidhal', 'jelassi', 40, 'formateur'),
  ];

  getAllCandidats() {
    return this.listeCandidats;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  addCandidat(newCandidat) {
    newCandidat._id =
      this.listeCandidats[this.listeCandidats.length - 1]._id + 1;
    this.listeCandidats.push(newCandidat);
  }
  addCandidatAPI(newCandidat) {
    // return this.http.post(`${this.link}/free`, newCandidat);
    return this.http.post(`${this.link}`, newCandidat);
  }

  updateCandidat(uCandidat) {
    let i = this.listeCandidats.findIndex((cand) => cand._id == uCandidat._id);
    this.listeCandidats[i] = uCandidat;
  }
  updateCandidatAPI(uCandidat) {
    // return this.http.put(`${this.link}/free/${uCandidat._id}`, uCandidat);
    return this.http.put(`${this.link}/${uCandidat._id}`, uCandidat);
  }

  deleteCandidat(id) {
    let i = this.listeCandidats.findIndex((cand) => cand._id == id);
    this.listeCandidats.splice(i, 1);
  }
  deleteCandidatAPI(id) {
    // return this.http.delete(`${this.link}/free/${id}`);
    return this.http.delete(`${this.link}/${id}`);
  }

  chercherCandidatParId(selectedId) {
    return this.listeCandidats.find((cand) => cand._id == selectedId);
  }

  chercherCandidatParIdAPI(selectedId) {
    return this.http.get(`${this.link}/${selectedId}`);
  }

  uploadAvatar(f: FormData) {
    return this.http.post('http://localhost:3000/images/upload', f);
  }

  ajouterCandidat() {
    this.listeCandidats.push(
      new Candidat('5', 'NEW', 'CANDIDAT', 40, 'formateur')
    );
  }
}
