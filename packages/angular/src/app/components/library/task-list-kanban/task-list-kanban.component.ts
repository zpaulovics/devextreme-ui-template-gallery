import {
  Component, NgModule, Input, SimpleChanges, OnChanges, ViewChild, Output, EventEmitter,
} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { DxSortableModule, DxSortableComponent } from 'devextreme-angular/ui/sortable';

import notify from 'devextreme/ui/notify';
import { DxSortableTypes } from 'devextreme-angular/ui/sortable';

import { CardMenuModule } from 'src/app/components';
import { Task } from 'src/app/types/task';
import { TaskStatus, taskStatusList } from 'src/app/types/task';
import { TaskKanbanCardModule, TaskKanbanCardComponent } from '../task-kanban-card/task-kanban-card.component';
import { DxScrollViewModule as DxScrollViewModule_1, DxButtonModule as DxButtonModule_1 } from 'devextreme-angular';
import { CardMenuComponent } from '../card-menu/card-menu.component';

type Board = {
  name: TaskStatus
  cards: Task[]
};

@Component({
    selector: 'task-list-kanban',
    templateUrl: './task-list-kanban.component.html',
    styleUrls: ['./task-list-kanban.component.scss'],
    imports: [
        DxScrollViewModule_1,
        DxSortableModule,
        CardMenuComponent,
        TaskKanbanCardComponent,
        DxButtonModule_1
    ]
})
export class TaskListKanbanComponent implements OnChanges {
  @ViewChild(DxSortableComponent, { static: false }) sortable: DxSortableComponent;

  @Input() dataSource: Task[];

  @Output() addTaskEvent: EventEmitter<any> = new EventEmitter();

  kanbanDataSource: Board[] = [];

  statuses = taskStatusList;

  boardMenuItems: Array<{ text: string }> = [
    { text: 'Add card' },
    { text: 'Copy list' },
    { text: 'Move list' },
  ];

  refresh() {
    this.sortable.instance.update();
  }

  fillOutBoard = (cards: Task[]): Board[] => {
    const result: Board[] = [];
    for (const status of this.statuses) {
      const value = cards.filter((item) => item.status === status);

      result.push(<Board>{ name: status, cards: value });
    }

    return result;
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes.dataSource) {
      this.kanbanDataSource = this.fillOutBoard(changes.dataSource.currentValue);
    }
  }

  getCardsByStatus = (status: TaskStatus): Task[] => {
    const cards: Task[] = this.dataSource
      .filter((task) => task.status === status);

    return cards;
  };

  onListReorder = (e: DxSortableTypes.ReorderEvent) => {
    const { fromIndex, toIndex } = e;
    const list = this.kanbanDataSource.splice(fromIndex, 1)[0];
    this.kanbanDataSource.splice(toIndex, 0, list);
  };

  onTaskDragStart(e: DxSortableTypes.DragStartEvent) {
    const { fromData, fromIndex } = e;
    e.itemData = fromData.cards[fromIndex];
  }

  onTaskDrop(e: DxSortableTypes.ReorderEvent | DxSortableTypes.AddEvent) {
    const {
      fromData, toData, fromIndex, toIndex, itemData,
    } = e;

    itemData.status = toData.name;

    fromData.cards.splice(fromIndex, 1);
    toData.cards.splice(toIndex, 0, itemData);
  }

  addTask() {
    this.addTaskEvent.emit();
  }
}

@NgModule({
    imports: [
        DxButtonModule,
        DxScrollViewModule,
        DxSortableModule,
        TaskKanbanCardModule,
        CardMenuModule,
        CommonModule,
        TaskListKanbanComponent,
    ],
    providers: [],
    exports: [TaskListKanbanComponent],
})
export class TaskListKanbanModule { }
