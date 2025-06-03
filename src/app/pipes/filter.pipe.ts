import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    //   if(selStatus.length == 0)
    if (!selStatus.length) return value;
    else {
      return value.filter((serv) => serv['status'] == selStatus);
      //   let newTab = [];
      //   for (const serv of value) {
      //     if (serv['status'] == selStatus) newTab.push(serv);
      //   }
      //   return newTab;
    }
  }
}
