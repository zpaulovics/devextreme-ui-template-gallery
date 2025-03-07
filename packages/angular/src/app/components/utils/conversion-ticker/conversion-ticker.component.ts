import {
  Component,
} from '@angular/core';

import { TickerCardComponent } from '../../library/ticker-card/ticker-card.component';

@Component({
    selector: 'conversion-ticker',
    templateUrl: 'conversion-ticker.component.html',
    imports: [TickerCardComponent]
})

export class ConversionTickerComponent {
}
