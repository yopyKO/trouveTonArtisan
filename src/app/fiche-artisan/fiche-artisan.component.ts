import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArtisanService } from '../artisan.service';


@Component({
  selector: 'app-fiche-artisan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fiche-artisan.component.html',
  styleUrl: './fiche-artisan.component.scss'
})
export class FicheArtisanComponent implements OnInit {

  artisan: any | null= null;
  
  constructor(private route: ActivatedRoute, private artisanService: ArtisanService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      this.artisanService.getArtisanById(id).subscribe((artisan: any) => {
        this.artisan = artisan;
      });
    });
  }
}
