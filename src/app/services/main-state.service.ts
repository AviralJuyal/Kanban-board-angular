import { Injectable } from '@angular/core';
import { Task } from '../models/tasks.interface';
import { User } from '../models/users.interface';

@Injectable({
  providedIn: 'root',
})
export class MainStateService {
  constructor() {}

  backlogList: Task[] = JSON.parse(localStorage.getItem('backlog') || '');
  // .length === 0
  //   ? [
  //       { id: 1, title: 'task1', status: 'ba', userId: 99 },
  //       { id: 2, title: 'task2', status: 'ba', userId: 99 },
  //     ]
  //   : JSON.parse(localStorage.getItem('backlog') || '');

  ongoingList: Task[] = JSON.parse(localStorage.getItem('ongoing') || '');
  // .length === 0
  //   ? [
  //       { id: 3, title: 'task3', status: 'on', userId: 100 },
  //       { id: 4, title: 'task4', status: 'on', userId: 99 },
  //     ]
  //   : JSON.parse(localStorage.getItem('ongoing') || '');

  reviewList: Task[] = JSON.parse(localStorage.getItem('review') || '');
  // .length === 0
  //   ? [
  //       { id: 5, title: 'task5', status: 're', userId: 101 },
  //       { id: 6, title: 'task6', status: 're', userId: 99 },
  //     ]
  //   : JSON.parse(localStorage.getItem('review') || '');

  completeList: Task[] = JSON.parse(localStorage.getItem('complete') || '');
  // .length === 0
  //   ? [
  //       { id: 7, title: 'task7', status: 'co', userId: 102 },
  //       { id: 8, title: 'task8', status: 'co', userId: 99 },
  //     ]
  //   : JSON.parse(localStorage.getItem('complete') || '');

  users: User[] = [
    { id: 99, name: 'Aviral' },
    { id: 100, name: 'Dummy' },
    { id: 101, name: 'Robot' },
    { id: 102, name: 'Robot2' },
  ];

  saveData() {
    localStorage.setItem('backlog', JSON.stringify(this.backlogList));
    localStorage.setItem('ongoing', JSON.stringify(this.ongoingList));
    localStorage.setItem('complete', JSON.stringify(this.completeList));
    localStorage.setItem('review', JSON.stringify(this.reviewList));
  }

  removeTask(task: Task, status: string) {
    let index = 0;
    switch (status) {
      case 'ba':
        index = this.backlogList.findIndex((l) => l.id === task.id);
        this.backlogList.splice(index, 1);

        return;
      case 'on':
        // this.ongoingList = this.ongoingList.filter((t) => t.id !== task.id);
        index = this.ongoingList.findIndex((l) => l.id === task.id);
        this.ongoingList.splice(index, 1);
        return;
      case 're':
        index = this.reviewList.findIndex((l) => l.id === task.id);
        this.reviewList.splice(index, 1);
        // this.reviewList = this.reviewList.filter((t) => t.id !== task.id);
        return;
      case 'co':
        index = this.completeList.findIndex((l) => l.id === task.id);
        this.completeList.splice(index, 1);
        // this.completeList = this.completeList.filter((t) => t.id !== task.id);
        return;
      default:
        return;
    }
  }

  addTask(task: Task, status: string) {
    switch (status) {
      case 'ba':
        this.backlogList.push({ ...task, status: 'ba' });
        return;
      case 'on':
        this.ongoingList.push({ ...task, status: 'on' });
        return;
      case 're':
        this.reviewList.push({ ...task, status: 're' });
        return;
      case 'co':
        this.completeList.push({ ...task, status: 'co' });
        return;
      default:
        return;
    }
  }

  onDragStart(event: DragEvent, draggedObject: Task) {
    console.log(draggedObject);
    // const index = this.taskList.findIndex((l) => l.id === draggedObject.id);
    event?.dataTransfer?.setData('text', JSON.stringify(draggedObject));
  }

  onDrop(event: DragEvent, newStatus: string) {
    const draggedItem =
      event.dataTransfer && JSON.parse(event?.dataTransfer?.getData('text'));

    this.removeTask(draggedItem, draggedItem.status);

    this.addTask(draggedItem, newStatus);

    console.log(draggedItem, newStatus, 'dragged');

    this.saveData();

    event?.dataTransfer?.clearData?.();
  }

  // onDragOver(event: DragEvent) {
  //   event.preventDefault();
  // }
}
