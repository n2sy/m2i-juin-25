import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-exp-signals',
  standalone: true,
  imports: [],
  templateUrl: './exp-signals.component.html',
  styleUrl: './exp-signals.component.css',
})
export class ExpSignalsComponent {
  framework = signal('Angular');
  version = signal(2);

  competence = computed(() => {
    return `J'utilise la version ${this.framework()} : ${this.version()}`;
  });

  constructor() {
    effect(() => {
      console.log('Valeur du signal Version est passé à', this.version());
    });
  }

  setFrameworkToSvelte() {
    this.framework.set('Svelte');
    //this.framework.set(this.framework() + ' ou Svelte');
  }

  addFrameworkToSvelte() {
    this.framework.update((previous) => {
      return `${previous} et Svelte`;
    });
  }

  incrementVersion() {
    this.version.update((previous) => previous + 1);
  }
}
