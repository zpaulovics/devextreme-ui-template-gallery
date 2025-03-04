import { Component, NgModule, Input, ViewChild, inject } from '@angular/core';

import { Router } from '@angular/router';
import { DxGanttModule, DxGanttComponent } from 'devextreme-angular/ui/gantt';
import { exportGantt as exportGanttToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
import { Task } from 'src/app/types/task';

import 'jspdf-autotable';

@Component({
    selector: 'task-list-gantt',
    templateUrl: './task-list-gantt.component.html',
    styleUrls: ['./task-list-gantt.component.scss'],
    imports: [DxGanttModule]
})
export class TaskListGanttComponent {
  private router = inject(Router);

  @ViewChild(DxGanttComponent, { static: false }) gantt: DxGanttComponent;

  @Input() dataSource: Task[];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
  }

  refresh() {
    this.gantt.instance.refresh();
  }

  onExporting() {
    exportGanttToPdf(
      {
        component: this.gantt.instance,
        createDocumentMethod: (args?: any) => new jsPDF(args),
      },
    ).then((doc) => doc.save('Tasks.pdf'));
  };

  navigateToDetails = () => {
    this.router.navigate(['/planning-task-details']);
  };
}


