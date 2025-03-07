
import {
  Component,
  Input
} from '@angular/core';
import { PositionConfig } from 'devextreme/animation/position';
import { CardMenuComponent } from '../card-menu/card-menu.component';
@Component({
    selector: 'card-analytics',
    templateUrl: './card-analytics.component.html',
    styleUrls: ['./card-analytics.component.scss'],
    imports: [CardMenuComponent]
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
