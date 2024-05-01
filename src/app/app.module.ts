import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KanbanBoardComponent } from './component/kanban-board/kanban-board.component';
import { OngoingComponent } from './component/ongoing/ongoing.component';
import { ReviewComponent } from './component/review/review.component';
import { BacklogsComponent } from './component/backlogs/backlogs.component';
import { CompletedComponent } from './component/completed/completed.component';
import { CardComponent } from './component/card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KanbanBoardComponent,
    OngoingComponent,
    ReviewComponent,
    BacklogsComponent,
    CompletedComponent,
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
