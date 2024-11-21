import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
searchArtisan(arg0: string) {
throw new Error('Method not implemented.');
}
  constructor(private categoryService: CategoryService) {}

  selectCategory(category: string) {
    this.categoryService.changeCategory(category);
  }

  
}
