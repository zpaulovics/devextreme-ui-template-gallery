import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Opportunity } from 'src/app/types/opportunities';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'opportunity-tile',
    templateUrl: 'opportunity-tile.component.html',
    styleUrls: ['./opportunity-tile.component.scss'],
    imports: [CurrencyPipe]
})

export class OpportunityTileComponent {
  @Input() data: Opportunity;

  opportunityClick() {
    notify('Click opportunity event');
  }
}
