import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class   
 CategoryService {
  private selectedCategorySource = new BehaviorSubject<string>('');
  selectedCategory$ = this.selectedCategorySource.asObservable();

  changeCategory(category: string) {
    this.selectedCategorySource.next(category);
  }
}