import {
  Component, Input, NgModule, OnChanges, SimpleChanges, ViewChild,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxLoadPanelModule,
} from 'devextreme-angular';
import { DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { Task } from '../../../types/task';
import { DxLoadPanelModule as DxLoadPanelModule_1 } from 'devextreme-angular/ui/load-panel';

@Component({
    selector: 'card-tasks',
    templateUrl: './card-tasks.component.html',
    styleUrls: ['./card-tasks.component.scss'],
    standalone: true,
    imports: [
    DxDataGridModule,
    DxLoadPanelModule_1
],
})
export class CardTasksComponent implements OnChanges {
  @ViewChild('dataGrid', { static: false }) component: DxDataGridComponent;

  @Input() tasks: Task[];

  @Input() isLoading: boolean = false;

  currentTasks: Task[];

  constructor() {
    this.onReorder = this.onReorder.bind(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.tasks?.currentValue) {
      this.currentTasks = changes.tasks.currentValue.filter((item) => !!item.status && !!item.priority);
    }
  }

  onReorder(e: DxDataGridTypes.RowDraggingReorderEvent) {
    const visibleRows = e.component.getVisibleRows();
    const toIndex = this.currentTasks.indexOf(visibleRows[e.toIndex].data);
    const fromIndex = this.currentTasks.indexOf(e.itemData);

    this.currentTasks.splice(fromIndex, 1);
    this.currentTasks.splice(toIndex, 0, e.itemData);
  }
}

@NgModule({
    imports: [DxDataGridModule, DxLoadPanelModule, CommonModule, CardTasksComponent],
    exports: [CardTasksComponent],
})
export class CardTasksModule { }
