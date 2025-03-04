import {
  Component, EventEmitter, Input, NgModule, Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { ApplyPipeModule } from 'src/app/pipes/apply.pipe';
import { DxTemplateModule } from 'devextreme-angular/core';

@Component({
    selector: 'pictured-item-select-box',
    templateUrl: 'pictured-item-select-box.component.html',
    styleUrls: ['./pictured-item-select-box.component.scss'],
    imports: [DxSelectBoxModule, DxTemplateModule, DxTextBoxModule]
})
export class PicturedItemSelectBoxComponent {
  @Input() value: Record<string, unknown>;

  @Input() label = '';

  @Input() items: Record<string, unknown>[] = [];

  @Output() valueChange = new EventEmitter<string>();
}

@NgModule({
    imports: [
        ApplyPipeModule,
        DxSelectBoxModule,
        DxTextBoxModule,
        CommonModule,
        PicturedItemSelectBoxComponent
    ],
    exports: [PicturedItemSelectBoxComponent],
})
export class PicturedItemSelectBoxModule {}
