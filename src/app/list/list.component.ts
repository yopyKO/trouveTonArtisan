import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

interface listArtisan {
  id: number;
  name: string;
  specialty: string;
	note: number;
	location: string;
	about: string;
	email: string;
	website: string;
	category:string;
	top: boolean;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent implements OnInit {
  artisans: any =(arti as any).default;
  
  artiCategory= this.arti;

  get arti() {
    return this.artisans.filter((artisan: { category: string; }) => artisan.category === this.artiCategory);
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      this.artiCategory = params.get('category') || '';
  });
    }
  }

