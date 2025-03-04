import {
  Component, OnInit, NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxDropDownButtonModule,
  DxTabPanelModule,
  DxValidationGroupModule,
  DxScrollViewModule,
} from 'devextreme-angular';
import {
  CardActivitiesModule,
  CardNotesModule,
  CardMessagesModule,
  StatusIndicatorModule,
} from 'src/app/components';
import { Task } from 'src/app/types/task';
import { DataService } from 'src/app/services';
import { TaskFormModule } from 'src/app/components/library/task-form/task-form.component';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxDropDownButtonModule as DxDropDownButtonModule_1 } from 'devextreme-angular/ui/drop-down-button';
import { TaskFormComponent } from '../../components/library/task-form/task-form.component';
import { CardActivitiesComponent } from '../../components/library/card-activities/card-activities.component';
import { CardNotesComponent } from '../../components/library/card-notes/card-notes.component';
import { CardMessagesComponent } from '../../components/library/card-messages/card-messages.component';

@Component({
    templateUrl: './planning-task-details.component.html',
    styleUrls: ['./planning-task-details.component.scss'],
    providers: [DataService],
    imports: [DxScrollViewModule, DxToolbarModule, DxiItemModule, DxButtonModule, DxDropDownButtonModule_1, DxValidationGroupModule, TaskFormComponent, DxTabPanelModule, CardActivitiesComponent, CardNotesComponent, CardMessagesComponent]
})
export class PlanningTaskDetailsComponent implements OnInit {
  task: Task;

  taskId = 1;

  taskName = 'Loading...';

  isLoading = false;

  constructor(private service: DataService) {
  }

  loadData = () => {
    this.service.getTask(this.taskId).subscribe((data) => {
      this.task = data;
      this.taskName = data.text;
      this.isLoading = false;
    });
  };

  ngOnInit(): void {
    this.loadData();
  }

  refresh = () => {
    this.isLoading = true;
    this.loadData();
  }
}

@NgModule({
    imports: [
        DxButtonModule,
        DxDropDownButtonModule,
        DxTabPanelModule,
        DxValidationGroupModule,
        DxToolbarModule,
        CardActivitiesModule,
        CardNotesModule,
        CardMessagesModule,
        TaskFormModule,
        StatusIndicatorModule,
        DxScrollViewModule,
        CommonModule,
        PlanningTaskDetailsComponent,
    ],
    providers: [],
    exports: [],
})
export class PlanningTaskDetailsModule { }
