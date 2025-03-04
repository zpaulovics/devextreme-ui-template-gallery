import { CommonModule, NgFor, DatePipe } from '@angular/common';
import {
  Component, Input, NgModule,
} from '@angular/core';
import {
  DxTextAreaModule,
  DxTextBoxModule,
  DxButtonModule,
  DxToolbarModule,
  DxFileUploaderModule,
  DxValidationGroupModule,
  DxValidatorModule,
} from 'devextreme-angular';
import { Message, Messages } from 'src/app/types/messages';
import { UserAvatarModule } from 'src/app/components/library/user-avatar/user-avatar.component';
import { DxToolbarModule as DxToolbarModule_1 } from 'devextreme-angular/ui/toolbar';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { UserAvatarComponent } from '../user-avatar/user-avatar.component';

@Component({
    selector: 'card-messages',
    templateUrl: './card-messages.component.html',
    styleUrls: ['./card-messages.component.scss'],
    imports: [DxValidationGroupModule, DxTextBoxModule, DxValidatorModule, DxTextAreaModule, DxToolbarModule_1, DxiItemModule, DxFileUploaderModule, NgFor, UserAvatarComponent, DxButtonModule, DatePipe]
})
export class CardMessagesComponent {
  @Input() user: string;

  @Input() items: Messages;

  messageTitle = '';

  messageText = '';

  getAvatarText(name: string) {
    return name.split(' ').map((name) => name[0]).join('');
  }

  getText(data: Message) {
    return data.text.replace('{username}',  data.manager !== this.items[0].manager ? this.items[0].manager : this.items[1].manager);
  }

  send = (e) => {
    if (!e.validationGroup.validate().isValid) {
      return;
    }

    const newMessage: Message = {
      subject: this.messageTitle,
      text: this.messageText,
      manager: this.user,
      date: new Date(),
    };

    this.items.push(newMessage);

    e.validationGroup.reset();
  };
}

@NgModule({
    imports: [
        DxTextAreaModule,
        DxTextBoxModule,
        DxToolbarModule,
        DxFileUploaderModule,
        DxButtonModule,
        DxValidationGroupModule,
        DxValidatorModule,
        UserAvatarModule,
        CommonModule,
        CardMessagesComponent,
    ],
    exports: [CardMessagesComponent],
})
export class CardMessagesModule { }
