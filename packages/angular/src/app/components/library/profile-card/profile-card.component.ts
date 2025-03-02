import {Component, EventEmitter, Input, NgModule, Output, ViewChild} from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, AsyncPipe } from '@angular/common';
import {
  DxButtonModule, DxDateBoxModule, DxFormComponent, DxFormModule, DxNumberBoxModule, DxSelectBoxModule,
  DxTextBoxModule, DxToolbarModule,
  DxValidatorModule,
  DxScrollViewModule
} from 'devextreme-angular';
import { FormTextboxModule } from 'src/app/components/utils/form-textbox/form-textbox.component';
import { FormPhotoModule } from 'src/app/components/utils/form-photo/form-photo.component';
import { ApplyPipeModule } from 'src/app/pipes/apply.pipe';
import { PicturedItemSelectBoxModule } from 'src/app/components/library/pictured-item-select-box/pictured-item-select-box.component';
import { ScreenService } from 'src/app/services';
import { StatusSelectBoxModule } from 'src/app/components/library/status-select-box/status-select-box.component';
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
    standalone: true,
    imports: [
        DxFormModule_1,
        NgFor,
        DxiItemModule,
        NgIf,
        DxoLabelModule,
        DxiValidationRuleModule,
        NgSwitch,
        NgSwitchCase,
        DxDateBoxModule,
        StatusSelectBoxComponent,
        PicturedItemSelectBoxComponent,
        ApplyPipe,
        AsyncPipe,
    ],
})
export class ProfileCardComponent {
  @ViewChild('form', { static: true }) form: DxFormComponent;

  @Input() items: Record<string, any>[] = [];

  @Input() colCount: number = 2;

  @Input() title: string = '';

  @Output() dataChanged = new EventEmitter<any>();

  @Input() cardData: CardData;

  getSizeQualifier = getSizeQualifier;

  assign = Object.assign;

  constructor(public screen: ScreenService) {}

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

@NgModule({
    imports: [
        ApplyPipeModule,
        DxButtonModule,
        DxDateBoxModule,
        DxFormModule,
        DxNumberBoxModule,
        DxToolbarModule,
        DxSelectBoxModule,
        DxScrollViewModule,
        DxTextBoxModule,
        FormTextboxModule,
        FormPhotoModule,
        DxValidatorModule,
        CommonModule,
        PicturedItemSelectBoxModule,
        StatusSelectBoxModule,
        ProfileCardComponent,
    ],
    exports: [ProfileCardComponent],
})
export class ProfileCardModule { }
