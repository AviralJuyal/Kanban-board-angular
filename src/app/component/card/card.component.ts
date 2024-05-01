import { Component, Input } from '@angular/core';
import { Task } from '../../models/tasks.interface';
import { MainStateService } from '../../services/main-state.service';
import { User } from '../../models/users.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(private mainService: MainStateService) {}
  @Input() taskList!: Task[];
  @Input() title!: string;
  @Input() color!: string;

  inFocus: boolean = false;

  users!: User[];
  selectedUserId!: number;

  getUserOfTask(task: Task): User {
    let user: User =
      this.users.find((user) => +user.id === +task.userId) || this.users[0];
    return user;
  }

  ngOnInit() {
    this.users = this.mainService.users;
  }

  handleSave(task: Task) {
    this.isEditingId = this.isEditingId ? null : task.id;
    this.mainService.saveData();
  }

  isEditingId: number | null = null;

  onDragStart(event: DragEvent, task: Task): void {
    this.mainService.onDragStart(event, task);
  }

  onDrop(event: DragEvent, newStatus: string): void {
    this.inFocus = false;

    this.mainService.onDrop(event, newStatus);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.inFocus = true;
  }
  onDragLeave(event: DragEvent) {
    this.inFocus = false;
  }
}
