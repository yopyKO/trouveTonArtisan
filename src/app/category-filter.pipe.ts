import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter',
  standalone: true
})
export class CategoryFilterPipe implements PipeTransform {

  transform(artisans: any[],
 searchText: string): any[] {
    if (!artisans) return [];
    if (!searchText) return artisans;
    searchText = searchText.toLowerCase();
    return artisans.filter(it => it.category.toLowerCase().includes(searchText));
  }
}