import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() unCandidat: Candidat;
  @Output() eventToListe = new EventEmitter<Candidat>();

  sendCandToListe() {
    this.eventToListe.emit(this.unCandidat);
  }
}
