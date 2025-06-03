import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  idRecupere;
  private actRoute = inject(ActivatedRoute);

  ngOnInit() {
    // 1ere manière
    // console.log(this.actRoute.snapshot.params['prenom']);
    //this.idRecupere = this.actRoute.snapshot.paramMap.get('id');

    //2eme manière
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.idRecupere = p.get('id');
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }
}
