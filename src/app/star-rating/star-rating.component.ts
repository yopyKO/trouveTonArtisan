import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  template: `
    <div class="star-rating">
      <span *ngFor="let star of stars" [class.filled]="star <= rating"></span>
    </div>
  `,
  styleUrls: ['./star-rating.component.scss']
})
export class StarsComponent {
  @Input()
  rating!: number;
  stars = [1, 2, 3, 4, 5];
}