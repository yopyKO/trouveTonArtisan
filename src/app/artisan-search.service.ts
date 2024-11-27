import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as arti from "./list/datas.json";

@Injectable({
  providedIn: 'root',
})
export class ArtisanSearchService {
  private artisanSource = new BehaviorSubject<any | null>(null); // Observable pour artisan sélectionné
  artisanSelected$ = this.artisanSource.asObservable();
  
  artisans: any[] = (arti as any).default;

  searchArtisan(searchValue: string): void {
    if (searchValue.trim() === '') {
      // Réinitialiser la recherche si le champ est vide
      this.artisanSource.next(null); // Aucun artisan filtré
      return;
    }
  
    // Filtrer les artisans correspondant à la recherche
    const foundArtisans = this.artisans.filter((artisan) =>
      artisan.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchValue.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchValue.toLowerCase())
    );
  
    // Mettre à jour les artisans sélectionnés
    this.artisanSource.next(foundArtisans);
  }
}