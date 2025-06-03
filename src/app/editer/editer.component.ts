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
    this.candidatAMettreAJour = this.candSer.chercherCandidatParId(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  ModifierHandler(fValue) {
    fValue._id = this.candidatAMettreAJour._id;
    this.candSer.updateCandidat(fValue);
    this.router.navigateByUrl('/cv');
  }
}
