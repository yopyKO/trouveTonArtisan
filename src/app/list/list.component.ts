import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";
import { RouterLink } from '@angular/router';
import { CategoryFilterPipe } from "../category-filter.pipe";
import { ActivatedRoute } from '@angular/router';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [CommonModule, RouterLink, CategoryFilterPipe, StarRatingComponent],
})

export class ListComponent implements OnInit {
  artisans: any = (arti as any).default;
  rating = 4.2;

  selectedCategory ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'];
    });
  }
  }

