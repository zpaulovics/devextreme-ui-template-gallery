import { NgClass } from '@angular/common';
import {
  Component, Input, OnInit,
} from '@angular/core';
import { TaskStatus, TaskPriority } from 'src/app/types/task';
import { DxTextBoxModule as DxTextBoxModule_1 } from 'devextreme-angular';

@Component({
    selector: 'status-indicator',
    template: `
  <div
    [ngClass]="{'input-with-bar': showBar }"
    class="
      status
      status-indicator
      status-indicator-{{ dashValue }}">
    @if (!isField) {
      <span class="status-indicator-{{ dashValue }}">{{ getValue(value) }}</span>
    }
    @if (isField) {
      <dx-text-box
        class="status-indicator-{{ dashValue }}"
        [inputAttr]="{class: 'status-input status-editor-input'}"
        [hoverStateEnabled]="false"
        [readOnly]="true"
        [value]="getValue(value)">
      </dx-text-box>
    }
  </div>
  `,
    styleUrls: ['./status-indicator.component.scss'],
    imports: [NgClass, DxTextBoxModule_1]
})
export class StatusIndicatorComponent implements OnInit {
  @Input() value: TaskStatus | TaskPriority;

  @Input() isField = true;

  @Input() showBar = false;

  dashValue = '';

  ngOnInit() {
    this.dashValue = this.spaceToDash(this.value).toLowerCase();
  }

  getValue(value: string): string {
    return (this.showBar ? '| ' : '') + value;
  }

  spaceToDash = (value: TaskStatus) =>
    (value?.replace(/ /g, '-') || '');
}
