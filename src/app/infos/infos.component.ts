import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  idRecupere;
  candidatCible: Candidat;
  private actRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    // 1ere manière
    // console.log(this.actRoute.snapshot.params['prenom']);
    //this.idRecupere = this.actRoute.snapshot.paramMap.get('id');

    //2eme manière
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        //this.idRecupere = p.get('id');
        this.candidatCible = this.candSer.chercherCandidatParId(p.get('id'));
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }
}
