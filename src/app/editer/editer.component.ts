import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-editer',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './editer.component.html',
  styleUrl: './editer.component.css',
})
export class EditerComponent {
  candidatAMettreAJour: Candidat;

  private activatedRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);

  ngOnInit() {
    this.candSer
      .chercherCandidatParIdAPI(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response: Candidat) => {
          this.candidatAMettreAJour = response;
        },
        error: (err) => {
          this.router.navigateByUrl('not-found');
        },
      });
  }

  ModifierHandler(fValue) {
    fValue._id = this.candidatAMettreAJour._id;
    this.candSer.updateCandidatAPI(fValue).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        alert(
          "Vous n'avez pas les autorisations nécessaires pour supprimer ce candidat"
        );
      },
    });
  }
}
