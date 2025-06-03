import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { DefaultAvatarPipe } from '../pipes/default-avatar.pipe';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [DefaultAvatarPipe],
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
