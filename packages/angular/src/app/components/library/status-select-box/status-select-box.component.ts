import { Component, EventEmitter, Input, NgModule, Output, inject } from '@angular/core';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { EditorStyle } from 'devextreme-angular/common';
import { contactStatusList } from 'src/app/types/contact';

import { ThemeService } from 'src/app/services/theme.service';
import { DxTemplateModule } from 'devextreme-angular/core';
import { ContactStatusComponent } from '../../utils/contact-status/contact-status.component';

@Component({
    selector: 'status-select-box',
    templateUrl: 'status-select-box.component.html',
    styleUrls: ['./status-select-box.component.scss'],
    imports: [DxSelectBoxModule, DxTemplateModule, ContactStatusComponent, DxTextBoxModule, LowerCasePipe]
})
export class StatusSelectBoxComponent {
  private theme = inject(ThemeService);

  @Input() value: string;

  @Input() label = '';

  @Input() items = contactStatusList;

  @Input() readOnly = false;

  @Input() stylingMode: EditorStyle = 'filled';

  @Input() labelMode: any = this.theme.isFluent() ? 'outside' : undefined;

  @Input() classList;

  @Output() valueChange = new EventEmitter<string>();

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

}


