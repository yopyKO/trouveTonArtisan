import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ArtisanSearchService } from '../artisan-search.service';


interface Artisan {
  id: string;
  name: string;
  specialty: string;
  note: number;
  location: string;
  top: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CommonModule, RouterLink, StarRatingComponent],
})
export class HomeComponent {
  artisans: any[] = (arti as any).default;
  artisanSelected: any | null= null
  rating = 4.2;
  

  constructor(private route: ActivatedRoute, private artisanSearchService: ArtisanSearchService) {}

  ngOnInit(): void {
    // Écouter les changements de l'artisan sélectionné
    this.artisanSearchService.artisanSelected$.subscribe((artisan) => {
      this.artisanSelected = artisan;
    });
  }
}