import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DxDateBoxModule, DxFormComponent } from 'devextreme-angular';
import { ScreenService } from 'src/app/services';
import { getSizeQualifier } from 'src/app/services/screen.service';
import { DxFormModule as DxFormModule_1 } from 'devextreme-angular/ui/form';
import { DxiItemModule, DxoLabelModule, DxiValidationRuleModule } from 'devextreme-angular/ui/nested';
import { StatusSelectBoxComponent } from '../status-select-box/status-select-box.component';
import { PicturedItemSelectBoxComponent } from '../pictured-item-select-box/pictured-item-select-box.component';
import { ApplyPipe } from '../../../pipes/apply.pipe';

type CardData = Record<string, any>;

@Component({
    selector: 'profile-card',
    templateUrl: './profile-card.component.html',
    styleUrls: ['profile-card.component.scss'],
    imports: [DxFormModule_1, DxiItemModule, DxoLabelModule, DxiValidationRuleModule, DxDateBoxModule, StatusSelectBoxComponent, PicturedItemSelectBoxComponent, ApplyPipe, AsyncPipe]
})
export class ProfileCardComponent {
  screen = inject(ScreenService);

  @ViewChild('form', { static: true }) form: DxFormComponent;

  @Input() items: Record<string, any>[] = [];

  @Input() colCount: number = 2;

  @Input() title: string = '';

  @Output() dataChanged = new EventEmitter<any>();

  @Input() cardData: CardData;

  getSizeQualifier = getSizeQualifier;

  assign = Object.assign;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  onFieldChange(fieldName?, value?) {
    const {isValid} = this.form.instance.validate();

    if (!isValid) {
      return;
    }

    if (fieldName) {
      this.cardData[fieldName] = value;
    }

    this.dataChanged.emit(this.cardData);
  }

  getFieldValue(cardData, fieldName) {
    return cardData[fieldName];
  }
}
