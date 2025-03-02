import {
  Component, NgModule, Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxTabPanelModule,
  DxDataGridModule,
} from 'devextreme-angular';
import {
  CardNotesModule,
  CardMessagesModule,
  CardActivitiesModule,
  CardOpportunitiesModule,
  CardTasksModule,
} from 'src/app/components';
import { Activity } from 'src/app/types/activities';
import { Messages } from 'src/app/types/messages';
import { Notes } from 'src/app/types/notes';
import { Opportunities } from 'src/app/types/opportunities';
import { Task } from 'src/app/types/task';
import { CardTasksComponent } from '../../library/card-tasks/card-tasks.component';
import { CardActivitiesComponent } from '../../library/card-activities/card-activities.component';
import { CardOpportunitiesComponent } from '../../library/card-opportunities/card-opportunities.component';
import { CardNotesComponent } from '../../library/card-notes/card-notes.component';
import { CardMessagesComponent } from '../../library/card-messages/card-messages.component';

@Component({
    selector: 'contact-cards',
    templateUrl: './contact-cards.component.html',
    styleUrls: ['./contact-cards.component.scss'],
    standalone: true,
    imports: [
        DxTabPanelModule,
        CardTasksComponent,
        CardActivitiesComponent,
        CardOpportunitiesComponent,
        CardNotesComponent,
        CardMessagesComponent,
    ],
})
export class ContactCardsComponent {
    @Input() tasks: Task[];

    @Input() activities: Activity[];

    @Input() activeOpportunities: Opportunities;

    @Input() closedOpportunities: Opportunities;

    @Input() notes: Notes;

    @Input() messages: Messages;

    @Input() contactName: string;

    @Input() isLoading: boolean;
}

@NgModule({
    imports: [
        DxButtonModule,
        DxTabPanelModule,
        DxDataGridModule,
        CardNotesModule,
        CardMessagesModule,
        CardActivitiesModule,
        CardOpportunitiesModule,
        CardTasksModule,
        CommonModule,
        ContactCardsComponent,
    ],
    providers: [],
    exports: [ContactCardsComponent],
})
export class ContactCardsModule { }
