import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() tabCands: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  sendCandToCv(cand) {
    this.eventToCv.emit(cand);
  }
}
