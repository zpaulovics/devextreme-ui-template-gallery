import {
  Component, NgModule, Input, OnInit,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  DxButtonModule,
  DxFormModule,
  DxLoadPanelModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTextAreaModule,
  DxToolbarModule,
  DxValidatorModule,
} from 'devextreme-angular';
import {
  StatusIndicatorModule,
  FormItemDateModule,
  FormTextboxModule,
} from 'src/app/components';
import { taskPriorityList, taskStatusList } from 'src/app/types/task';
import { Task } from 'src/app/types/task';
import { getSizeQualifier } from 'src/app/services/screen.service';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { ScreenService } from '../../../services';
import { ToolbarFormModule } from 'src/app/components/utils/toolbar-form/toolbar-form.component';
import { ToolbarFormComponent } from '../../utils/toolbar-form/toolbar-form.component';
import { DxFormModule as DxFormModule_1 } from 'devextreme-angular/ui/form';
import { DxiItemModule, DxoColCountByScreenModule } from 'devextreme-angular/ui/nested';
import { DxTemplateModule } from 'devextreme-angular/core';
import { FormTextboxComponent } from '../../utils/form-textbox/form-textbox.component';
import { StatusIndicatorComponent } from '../status-indicator/status-indicator.component';
import { FormDateboxComponent } from '../../utils/form-datebox/form-datebox.component';
import { DxLoadPanelModule as DxLoadPanelModule_1 } from 'devextreme-angular/ui/load-panel';

@Component({
    selector: 'task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss'],
    standalone: true,
    imports: [
    ToolbarFormComponent,
    DxFormModule_1,
    DxiItemModule,
    DxTemplateModule,
    FormTextboxComponent,
    DxoColCountByScreenModule,
    DxSelectBoxModule,
    StatusIndicatorComponent,
    FormDateboxComponent,
    DxTextAreaModule,
    DxLoadPanelModule_1
],
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task;

  @Input() isLoading: boolean = false;

  @Input() isCreateMode: boolean = false;

  savedData: Task = null;

  isEditing = false;

  statusList = taskStatusList;

  priorityList = taskPriorityList;

  getSizeQualifier = getSizeQualifier;

  constructor(protected screen: ScreenService) {}

  ngOnInit() {
    this.isEditing = this.isCreateMode;
  }
  handleEditClick = () => {
    this.savedData = { ...this.task }
    this.isEditing = true;
  };

  handleSaveClick = ({ validationGroup }: DxButtonTypes.ClickEvent) => {
    if(!validationGroup.validate().isValid) return;
    this.savedData = null;
    this.isEditing = false;
  };

  handleCancelClick = () => {
    this.task = { ...this.savedData };
    this.isEditing = false;
  };

  getNewTaskData = ()=> ({ ...this.task });
}

@NgModule({
    imports: [
        DxButtonModule,
        DxFormModule,
        DxLoadPanelModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        DxTextAreaModule,
        DxToolbarModule,
        DxValidatorModule,
        FormTextboxModule,
        StatusIndicatorModule,
        FormItemDateModule,
        ToolbarFormModule,
        CommonModule,
        TaskFormComponent,
    ],
    providers: [],
    exports: [TaskFormComponent],
})
export class TaskFormModule { }
