import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter',
  standalone: true
})
export class CityFilterPipe implements PipeTransform {

  transform(artisans: any[], 
    searchText: string): any[] {
       if (!artisans) return [];
       if (!searchText) return artisans;
       searchText = searchText.toLowerCase();
       return artisans.filter(it => it.location.toLowerCase().includes(searchText));
     }
}
