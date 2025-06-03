import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { DefaultAvatarPipe } from '../pipes/default-avatar.pipe';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DefaultAvatarPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCand: Candidat;
  private recrueSer = inject(GestionRecruesService);

  recruterHandler() {
    this.recrueSer.addRecrue(this.selCand);
  }
}
