import { Component, OnInit, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxDropDownButtonModule,
  DxScrollViewModule,
} from 'devextreme-angular';
import {
  CardActivitiesModule,
  CardNotesModule,
  CardMessagesModule,
} from 'src/app/components';
import { DataService } from 'src/app/services';
import { forkJoin, map } from 'rxjs';
import { Contact } from 'src/app/types/contact';
import { Messages } from 'src/app/types/messages';
import { Notes } from 'src/app/types/notes';
import { Opportunities } from 'src/app/types/opportunities';
import { ContactFormModule } from 'src/app/components/library/contact-form/contact-form.component';
import { ContactCardsModule } from 'src/app/components/utils/contact-cards/contact-cards.component';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxDropDownButtonModule as DxDropDownButtonModule_1 } from 'devextreme-angular/ui/drop-down-button';
import { ContactFormComponent } from '../../components/library/contact-form/contact-form.component';
import { ContactCardsComponent } from '../../components/utils/contact-cards/contact-cards.component';

@Component({
    templateUrl: './crm-contact-details.component.html',
    styleUrls: ['./crm-contact-details.component.scss'],
    providers: [DataService],
    standalone: true,
    imports: [
        DxScrollViewModule,
        DxToolbarModule,
        DxiItemModule,
        DxButtonModule,
        DxDropDownButtonModule_1,
        ContactFormComponent,
        ContactCardsComponent,
    ],
})
export class CrmContactDetailsComponent implements OnInit {
  private service = inject(DataService);

  contactId = 12;

  contactData: Contact;

  contactNotes: Notes;

  contactMessages: Messages;

  activeOpportunities: Opportunities;

  closedOpportunities: Opportunities;

  contactName = 'Loading...';

  isLoading = false;

  ngOnInit(): void {
    this.loadData();
  }

  loadData = () => {
    forkJoin([
      this.service.getContactNotes(this.contactId),
      this.service.getContactMessages(this.contactId),
      this.service.getActiveContactOpportunities(this.contactId),
      this.service.getClosedContactOpportunities(this.contactId),
    ]).pipe(
      map(
        ([
          contactNotes,
          contactMessages,
          activeOpportunities,
          closedOpportunities
        ]) => ({
          contactNotes,
          contactMessages,
          activeOpportunities,
          closedOpportunities
        }))
      ).subscribe(
        (data) => Object.keys(data).forEach((key) => this[key] = data[key])
    );

    this.service.getContact(this.contactId).subscribe((data) => {
      this.contactName = data.name;
      this.contactData = data;
      this.isLoading = false;
    })
  };

  refresh = () => {
    this.isLoading = true;
    this.loadData();
  };
}

@NgModule({
    imports: [
        DxButtonModule,
        DxDropDownButtonModule,
        DxScrollViewModule,
        DxToolbarModule,
        ContactFormModule,
        ContactCardsModule,
        CardActivitiesModule,
        CardNotesModule,
        CardMessagesModule,
        CommonModule,
        CrmContactDetailsComponent,
    ],
    providers: [],
    exports: [],
})
export class CrmContactDetailsModule { }
