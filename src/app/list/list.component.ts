import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as arti from "../list/datas.json";
import { RouterLink } from '@angular/router';
import { CategoryService } from '../category.service';
import { CategoryFilterPipe } from "../category-filter.pipe";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink, CategoryFilterPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})

export class ListComponent implements OnInit {
  artisans: any = (arti as any).default;

  selectedCategory ='';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'];
    });
  }
  }

