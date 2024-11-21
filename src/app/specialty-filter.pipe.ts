import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialtyFilter',
  standalone: true
})
export class SpecialtyFilterPipe implements PipeTransform {

  transform(artisans: any[], 
    searchText: string): any[] {
       if (!artisans) return [];
       if (!searchText) return artisans;
       searchText = searchText.toLowerCase();
       return artisans.filter(it => it.specialty.toLowerCase().includes(searchText));
     }
}
