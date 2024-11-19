import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";

interface Artisan {
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
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  artisans: any =(arti as any).default;

}
