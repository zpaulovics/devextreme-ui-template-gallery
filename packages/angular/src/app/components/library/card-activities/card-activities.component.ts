import { CommonModule, NgClass, DatePipe } from '@angular/common';
import {
  Component, NgModule, Input, SimpleChanges, OnInit, OnChanges,
} from '@angular/core';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxListModule } from 'devextreme-angular/ui/list';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { CardMenuComponent } from '../card-menu/card-menu.component';
import { Activity } from 'src/app/types/activities';

@Component({
    selector: 'card-activities',
    templateUrl: './card-activities.component.html',
    styleUrls: ['./card-activities.component.scss'],
    imports: [NgClass, DxListModule, DxLoadPanelModule, CardMenuComponent, DatePipe]
})
export class CardActivitiesComponent {
  @Input() activities: Activity[];

  @Input() showBy? = false;

  @Input() isLoading: boolean = false;

  activityMenuItems: Array<{ text: string }> = [
    { text: 'View details' },
    { text: 'Delete' },
  ];
}


