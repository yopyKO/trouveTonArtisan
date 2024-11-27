import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CategoryService } from '../category.service';
import { ArtisanSearchService } from '../artisan-search.service';
import * as arti from "../list/datas.json";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private artisanSearchService: ArtisanSearchService) {}

  onSearchSubmit(searchValue: string, event: Event): void {
    event.preventDefault(); // Empêche le comportement par défaut
    this.artisanSearchService.searchArtisan(searchValue); // Déclenche la recherche
  }

}
