import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as arti from './list/datas.json';

@Injectable({ providedIn: 'root' })

export class ArtisanService {
  private artisans = (arti as any).default;

  getArtisanById(id: string | null ): Observable<any> {

    return of(this.artisans.find((artisan: { id: string | null; }) => artisan.id === id));
  }
}