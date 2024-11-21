import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StarsComponent } from '../star-rating/star-rating.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  artisans: any[] = (arti as any).default;
  artisanSelected: any | null= null

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const artisanId = params.get('id');
    });
  }

  searchArtisan(searchValue: string) {
    this.artisanSelected = this.artisans.find((artisan: { name: string; specialty: string; location: string; }) => {
      return artisan.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              artisan.specialty.toLowerCase().includes(searchValue.toLowerCase()) ||
              artisan.location.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}