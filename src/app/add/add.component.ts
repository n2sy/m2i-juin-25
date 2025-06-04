import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);

  ajouterHandler(e, fValue) {
    console.log(e.target[4].files[0]);
    let formData = new FormData();
    formData.set('avatar', e.target[4].files[0]);

    this.candSer.uploadAvatar(formData).subscribe({
      next: (response) => {
        fValue.avatar = response['fileName'];
        this.candSer.addCandidatAPI(fValue).subscribe({
          next: (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
          error: (err) => {
            console.log("Problème avec l'ajout d'un candidat");
          },
        });
      },
      error: (err) => {
        console.log("Problème avec l'upload de l'avatar");
      },
    });

    // this.candSer.addCandidat(fValue);
    //
  }
}
