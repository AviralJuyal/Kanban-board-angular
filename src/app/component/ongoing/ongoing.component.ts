import { Component } from '@angular/core';
import { Task } from '../../models/tasks.interface';
import { MainStateService } from '../../services/main-state.service';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrl: './ongoing.component.css',
})
export class OngoingComponent {
  color: string = 'yellow';

  title: string = 'Ongoing';

  ongoingList!: Task[];

  constructor(private mainService: MainStateService) {}

  ngOnInit() {
    this.ongoingList = this.mainService.ongoingList;
  }
}
