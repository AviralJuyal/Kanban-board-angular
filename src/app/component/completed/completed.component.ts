import { Component } from '@angular/core';
import { Task } from '../../models/tasks.interface';
import { MainStateService } from '../../services/main-state.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.css',
})
export class CompletedComponent {
  color: string = 'lightblue';

  title: string = 'Completed';

  completeList!: Task[];

  constructor(private mainService: MainStateService) {}

  ngOnInit() {
    this.completeList = this.mainService.completeList;
  }
}
