import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Task } from '../../models/tasks.interface';
import { MainStateService } from '../../services/main-state.service';

@Component({
  selector: 'app-backlogs',
  templateUrl: './backlogs.component.html',
  styleUrl: './backlogs.component.css',
})
export class BacklogsComponent {
  color: string = 'rgb(239, 128, 108)';

  backLogList!: Task[];
  title: string = 'Backlogs';

  constructor(private mainService: MainStateService) {}

  ngOnInit() {
    this.backLogList = this.mainService.backlogList;
  }
}
