import {
  Component, NgModule, Input,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  DxButtonModule,
  DxFormModule,
  DxLoadPanelModule,
  DxNumberBoxModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxToolbarModule,
  DxValidatorModule,
  DxValidationGroupModule,
} from 'devextreme-angular';
import {
  ContactStatusModule,
  FormTextboxModule,
  FormPhotoModule,
  StatusSelectBoxModule,
} from 'src/app/components';
import { Contact } from 'src/app/types/contact';
import { ValidationRule } from 'devextreme-angular/common';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { ToolbarFormModule } from 'src/app/components/utils/toolbar-form/toolbar-form.component';
import { ToolbarFormComponent } from '../../utils/toolbar-form/toolbar-form.component';
import { DxFormModule as DxFormModule_1 } from 'devextreme-angular/ui/form';
import { DxiItemModule, DxoColCountByScreenModule } from 'devextreme-angular/ui/nested';
import { DxTemplateModule } from 'devextreme-angular/core';
import { FormPhotoComponent } from '../../utils/form-photo/form-photo.component';
import { StatusSelectBoxComponent } from '../status-select-box/status-select-box.component';
import { FormTextboxComponent } from '../../utils/form-textbox/form-textbox.component';
import { DxLoadPanelModule as DxLoadPanelModule_1 } from 'devextreme-angular/ui/load-panel';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss'],
    standalone: true,
    imports: [
        DxValidationGroupModule,
        ToolbarFormComponent,
        NgIf,
        DxFormModule_1,
        DxiItemModule,
        DxoColCountByScreenModule,
        DxTemplateModule,
        FormPhotoComponent,
        StatusSelectBoxComponent,
        FormTextboxComponent,
        DxNumberBoxModule,
        DxValidatorModule,
        DxButtonModule,
        DxLoadPanelModule_1,
    ],
})
export class ContactFormComponent {
  @Input() contactData: Contact;

  @Input() isLoading: boolean;

  savedData: Contact = null;

  isEditing = false;

  zipCodeValidator: ValidationRule = { type: 'pattern', pattern: /^\d{5}$/, message: 'Zip is invalid' };

  handleEditClick() {
    this.savedData = { ...this.contactData };
    this.isEditing = true;
  }

  handleSaveClick({ validationGroup }: DxButtonTypes.ClickEvent) {
    if(!validationGroup.validate().isValid) return;
    this.isEditing = false;
    this.savedData = null;
  }

  handleCancelClick() {
    this.contactData = { ...this.savedData };
    this.isEditing = false;
  }
}

@NgModule({
    imports: [
        DxFormModule,
        DxSelectBoxModule,
        DxButtonModule,
        DxTextBoxModule,
        DxNumberBoxModule,
        DxLoadPanelModule,
        DxValidationGroupModule,
        FormTextboxModule,
        ContactStatusModule,
        FormPhotoModule,
        DxValidatorModule,
        ToolbarFormModule,
        CommonModule,
        StatusSelectBoxModule,
        ContactFormComponent,
    ],
    providers: [],
    exports: [ContactFormComponent],
})
export class ContactFormModule { }
