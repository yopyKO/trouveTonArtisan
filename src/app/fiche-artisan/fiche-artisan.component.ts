import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";

@Component({
  selector: 'app-fiche-artisan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.css'
})
export class FicheArtisanComponent {
  artisans: any =(arti as any).default;
}
