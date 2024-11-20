import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  artisans: any = (arti as any).default;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const artisanId = params.get('id');
    });
}
}