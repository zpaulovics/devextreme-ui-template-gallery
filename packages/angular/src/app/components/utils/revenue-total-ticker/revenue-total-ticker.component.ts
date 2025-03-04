import {
  Component, NgModule, Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sales } from 'src/app/types/analytics';

import { TickerCardComponent } from '../../library/ticker-card/ticker-card.component';

@Component({
    selector: 'revenue-total-ticker',
    templateUrl: 'revenue-total-ticker.component.html',
    imports: [TickerCardComponent]
})

export class RevenueTotalTickerComponent {
  @Input() data: Sales = null;
}

