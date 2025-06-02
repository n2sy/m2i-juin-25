import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input({ required: true }) secondColor: string = 'red';

  @Output() enveloppe = new EventEmitter();

  deposerEnveloppe() {
    this.enveloppe.emit('Lettre de la part du SecondComponent');
  }
}
