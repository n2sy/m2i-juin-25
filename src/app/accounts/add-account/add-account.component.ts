import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  standalone: true,
  imports: [],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allStatus = ['', 'inactive', 'active', 'unknown'];
  @Output() eventToHomeAccount = new EventEmitter();

  addAccountHandler(name, status) {
    this.eventToHomeAccount.emit({
      nom: name,
      statut: status,
    });
  }
}
