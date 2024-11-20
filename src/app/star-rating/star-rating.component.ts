import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Output() ratingUpdated = new EventEmitter<number>();
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(rating: number): void {
    this.rating = rating;
    this.ratingUpdated.emit(rating);
  }
}