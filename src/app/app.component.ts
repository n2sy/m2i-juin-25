import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { CvComponent } from './cv/cv.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstComponent,
    SecondComponent,
    CvComponent,
    HomeAccountComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'm2i-juin-25';

  lireLettreV2(lettre: string) {
    alert(lettre);
  }
}
