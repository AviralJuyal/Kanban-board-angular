import { Component } from '@angular/core';
import { Task } from '../../models/tasks.interface';
import { MainStateService } from '../../services/main-state.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
})
export class ReviewComponent {
  title: string = 'Review';

  color: string = 'green';

  reviewList!: Task[];

  constructor(private mainService: MainStateService) {}

  ngOnInit() {
    this.reviewList = this.mainService.reviewList;
  }
}
