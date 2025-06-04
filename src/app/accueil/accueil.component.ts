import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ExpObsComponent } from '../exp-obs/exp-obs.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [RouterLink, ExpObsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  private router = inject(Router);
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/useeers').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Au revoir');
      },
    });
  }

  goToCv() {
    this.router.navigateByUrl('cv');
  }

  goToServers() {
    this.router.navigate(['servers']);
  }
}
