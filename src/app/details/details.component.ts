import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { DefaultAvatarPipe } from '../pipes/default-avatar.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [DefaultAvatarPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCand: Candidat;
}
