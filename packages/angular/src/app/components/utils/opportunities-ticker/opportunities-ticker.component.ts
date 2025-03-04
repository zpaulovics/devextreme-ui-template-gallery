import {
  Component, NgModule, Input,
} from '@angular/core';

import { SalesOrOpportunitiesByCategory } from 'src/app/types/analytics';

import { TickerCardComponent } from '../../library/ticker-card/ticker-card.component';

@Component({
    selector: 'opportunities-ticker',
    templateUrl: 'opportunities-ticker.component.html',
    imports: [TickerCardComponent]
})

export class OpportunitiesTickerComponent {
  @Input() data: SalesOrOpportunitiesByCategory = null;
}


