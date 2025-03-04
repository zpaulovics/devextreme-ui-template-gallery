import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';

import {
  DxButtonModule,
  DxTextBoxModule,
  DxValidatorModule
} from 'devextreme-angular';
import { ValidationRule } from 'devextreme-angular/common';
import { DxiButtonModule } from 'devextreme-angular/ui/nested';

@Component({
    selector: 'form-textbox',
    templateUrl: './form-textbox.component.html',
    styleUrls: ['form-textbox.component.scss'],
    imports: [DxTextBoxModule, DxValidatorModule, DxiButtonModule]
})
export class FormTextboxComponent {
  @Input() isEditing = false;

  @Input() text: string;

  @Input() label = '';

  @Input() mask: string = null;

  @Input() icon: string = null;

  @Input() validators: ValidationRule[] = [{ type: 'required' }];

  @Input() value!: string;

  @Output() valueChange = new EventEmitter<string>();

  valueChanged(e) {
    this.valueChange.emit(e.value);
  }

}


