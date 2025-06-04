import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';
  private http = inject(HttpClient);

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  Inscription(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  seDeconnecter() {}

  estConnecte() {}
}
