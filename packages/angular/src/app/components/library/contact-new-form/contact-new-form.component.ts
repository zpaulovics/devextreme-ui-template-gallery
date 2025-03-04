import {
  Component,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxTextBoxModule,
  DxFormModule,
  DxValidatorModule,
} from 'devextreme-angular';

import { newContact } from 'src/app/types/contact';
import { getSizeQualifier } from 'src/app/services/screen.service';
import { DxFormModule as DxFormModule_1 } from 'devextreme-angular/ui/form';
import { DxiItemModule, DxoColCountByScreenModule } from 'devextreme-angular/ui/nested';
import { DxTemplateModule } from 'devextreme-angular/core';
import { FormPhotoUploaderComponent } from '../../utils/form-photo-uploader/form-photo-uploader.component';
import { FormTextboxComponent } from '../../utils/form-textbox/form-textbox.component';

@Component({
    selector: 'contact-new-form',
    templateUrl: './contact-new-form.component.html',
    providers: [],
    imports: [DxFormModule_1, DxiItemModule, DxoColCountByScreenModule, DxTemplateModule, FormPhotoUploaderComponent, FormTextboxComponent]
})

export class ContactNewFormComponent {
  newUser = newContact;
  getSizeQualifier = getSizeQualifier;
  constructor() { }

  getNewContactData = ()=> ({ ...this.newUser })
}


