import { CommonModule, NgIf } from '@angular/common';
import {
  Component,
  NgModule,
  Input
} from '@angular/core';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { PositionConfig } from 'devextreme/animation/position';
import { CardMenuModule, CardMenuComponent } from '../card-menu/card-menu.component';
@Component({
    selector: 'card-analytics',
    templateUrl: './card-analytics.component.html',
    styleUrls: ['./card-analytics.component.scss'],
    imports: [CardMenuComponent, NgIf]
})

export class CardAnalyticsComponent {
  @Input() titleText: string;

  @Input() contentClass: string;

  @Input() isMenuVisible = true;

  @Input() isLoading = false;
  menuItems: Array<{ text: string }> = [
    { text: 'Configure' },
    { text: 'Remove' },
  ];

  position: PositionConfig;
}

@NgModule({
    imports: [
        DxLoadPanelModule,
        CardMenuModule,
        CommonModule,
        CardAnalyticsComponent,
    ],
    exports: [CardAnalyticsComponent],
})
export class CardAnalyticsModule { }
