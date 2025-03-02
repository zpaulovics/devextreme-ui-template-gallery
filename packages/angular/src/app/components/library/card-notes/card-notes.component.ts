import { CommonModule, NgFor, DatePipe } from '@angular/common';
import {
  Component, Input, NgModule, OnInit,
} from '@angular/core';
import {
  DxTextAreaModule,
  DxToolbarModule,
  DxButtonModule,
  DxValidationGroupModule,
  DxValidatorModule,
  DxScrollViewModule
} from 'devextreme-angular';
import { Notes, Note } from 'src/app/types/notes';
import { DxiValidationRuleModule, DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxToolbarModule as DxToolbarModule_1 } from 'devextreme-angular/ui/toolbar';

@Component({
    selector: 'card-notes',
    templateUrl: './card-notes.component.html',
    styleUrls: ['./card-notes.component.scss'],
    standalone: true,
    imports: [
        DxValidationGroupModule,
        DxTextAreaModule,
        DxValidatorModule,
        DxiValidationRuleModule,
        DxToolbarModule_1,
        DxiItemModule,
        DxScrollViewModule,
        NgFor,
        DxButtonModule,
        DatePipe,
    ],
})
export class CardNotesComponent {
  @Input() user: string;

  @Input() items: Notes;

  nodeText = '';

  add = (e) => {
    if (!e.validationGroup.validate().isValid) {
      return;
    }

    const newNote: Note = {
      manager: this.user,
      date: new Date(),
      text: this.nodeText,
    };

    this.items.push(newNote);

    e.validationGroup.reset();
  };
}

@NgModule({
    imports: [
        DxTextAreaModule,
        DxToolbarModule,
        DxButtonModule,
        DxValidationGroupModule,
        DxValidatorModule,
        DxScrollViewModule,
        CommonModule,
        CardNotesComponent,
    ],
    exports: [CardNotesComponent],
})
export class CardNotesModule { }
