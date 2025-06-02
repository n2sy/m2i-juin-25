import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule, SecondComponent],
  templateUrl: './first.component.html',
})
export class FirstComponent {
  societe: string = 'Inetum';
  annee: number = 2025;

  myColor: string = 'pink';
  hd: boolean = false;

  clickHandler() {
    alert("J'ai été cliqué !");
  }

  changerNomSociete(inp: any) {
    this.societe = inp.value;
  }

  lireLettre(lettre: string) {
    console.log(lettre);
  }
}
