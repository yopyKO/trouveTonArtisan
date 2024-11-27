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
    const foundArtisan = this.artisans.find((artisan) =>
      artisan.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchValue.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchValue.toLowerCase())
    );
    this.artisanSource.next(foundArtisan); // Met à jour l'observable
  }
}