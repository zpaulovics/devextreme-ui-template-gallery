import {
  Component, Input, NgModule, Output, EventEmitter
} from '@angular/core';

import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxButtonModule as DxButtonModule_1 } from 'devextreme-angular';

@Component({
    selector: 'toolbar-form',
    templateUrl: './toolbar-form.component.html',
    styleUrls: ['./toolbar-form.component.scss'],
    imports: [DxToolbarModule, DxiItemModule, DxButtonModule_1]
})
export class ToolbarFormComponent {
  @Input() isEditing: boolean;

  @Input() titleClass: string;

  @Output() editModeToggled = new EventEmitter();

  @Output() saveButtonClicked = new EventEmitter();

  @Output() editingCancelled = new EventEmitter();

  handleCancelEditClick () {
    this.editingCancelled.emit();
  }

  handleEditClick () {
    this.editModeToggled.emit();
  }

  handleSaveButtonClick (event) {
    this.saveButtonClicked.emit(event);
  }
}


