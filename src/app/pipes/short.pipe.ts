import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'short',
  standalone: true,
})
export class ShortPipe implements PipeTransform {
  transform(value: string, nbMax: number): string {
    if (value.length < nbMax) return value;
    return `${value.substring(0, nbMax)}...`;
  }
}
