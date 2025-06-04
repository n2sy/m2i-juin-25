import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';
import { DefaultAvatarPipe } from '../pipes/default-avatar.pipe';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink, DefaultAvatarPipe],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  idRecupere;
  candidatCible: Candidat;
  private actRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);

  deleteHandler() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.candidatCible._id);
      this.router.navigateByUrl('/cv');
    }
  }

  ngOnInit() {
    // 1ere manière
    // console.log(this.actRoute.snapshot.params['prenom']);
    //this.idRecupere = this.actRoute.snapshot.paramMap.get('id');

    //2eme manière
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        //this.idRecupere = p.get('id');
        this.candSer.chercherCandidatParIdAPI(p.get('id')).subscribe({
          next: (response: Candidat) => {
            this.candidatCible = response;
          },
          error: (err) => {
            this.router.navigateByUrl('not-found');
          },
        });
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }
}
