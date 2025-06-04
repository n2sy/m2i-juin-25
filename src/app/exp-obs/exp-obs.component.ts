import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  standalone: true,
  imports: [],
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  //   myObs$: Observable<string> = new Observable((observer: Observer<string>) => {
  //     setTimeout(() => {
  //       observer.next('Premier package');
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next('deuxième package');
  //     }, 4000);
  //     setTimeout(() => {
  //       observer.error(new Error("Erreur provoquée par l'observer"));
  //     }, 6000);
  //     // setTimeout(() => {
  //     //   observer.next('troisième package');
  //     // }, 7000);
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 8000);
  //   });

  myObs$: Observable<number> = new Observable((observer: Observer<number>) => {
    let count = 0;
    setInterval(() => {
      count++;
      observer.next(count);
    }, 1000);
  });
  numeroAbonne: Subscription;

  ngOnInit() {
    this.numeroAbonne = this.myObs$.subscribe({
      next: (valeur) => {
        console.log(valeur);
      },
      error: (err) => {
        console.log('Erreur capturée', err);
      },
      complete: () => {
        console.log('Flux fermée');
      },
    });
  }

  ngOnDestroy() {
    this.numeroAbonne.unsubscribe();
  }
}
