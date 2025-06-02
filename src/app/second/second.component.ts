import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) secondColor: string = 'red';

  @Output() enveloppe = new EventEmitter<string>();

  deposerEnveloppe() {
    this.enveloppe.emit('Lettre de la part du SecondComponent');
  }
}
