import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Note sur 5 avec décimales

  // Calculer le nombre d'étoiles pleines
  get fullStars(): number[] {
    return Array(Math.floor(this.rating)).fill(0);
  }

  // Calculer le pourcentage de l'étoile partiellement remplie
  get partialStar(): number {
    // Extraire la partie décimale de la note
    const decimalPart = this.rating - Math.floor(this.rating);
    return Math.round(decimalPart * 10); // Convertir la partie décimale en pourcentage (par tranches de 10%)
  }

  // Calculer le nombre d'étoiles vides
  get emptyStars(): number[] {
    const fullStarCount = Math.floor(this.rating);
    const partialStarCount = this.partialStar ? 1 : 0;
    return Array(5 - fullStarCount - partialStarCount).fill(0);
  }
}
