import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  artisans: any = (arti as any).default;
}
