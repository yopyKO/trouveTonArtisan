import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(artisans: any[],
    searchText: string): any[] {
       if (!artisans) return [];
       if (!searchText) return artisans;
       searchText = searchText.toLowerCase();
       return artisans.filter(it => it.name.toLowerCase().includes(searchText));
     }
}
