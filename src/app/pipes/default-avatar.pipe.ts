import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultAvatar',
  standalone: true,
})
export class DefaultAvatarPipe implements PipeTransform {
  transform(value: string): string {
    if (value) return value;
    return 'avatar.jpg';
  }
}
