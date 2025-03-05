import {
  Component, Input, OnChanges, SimpleChanges,
} from '@angular/core';

import {
  DxButtonModule,
} from 'devextreme-angular';
import { Opportunity } from 'src/app/types/opportunities';

import { OpportunityTileComponent } from '../../utils/opportunity-tile/opportunity-tile.component';
import { DxLoadPanelModule as DxLoadPanelModule_1 } from 'devextreme-angular/ui/load-panel';

@Component({
    selector: 'card-opportunities',
    templateUrl: './card-opportunities.component.html',
    styleUrls: ['./card-opportunities.component.scss'],
    imports: [DxButtonModule, OpportunityTileComponent, DxLoadPanelModule_1]
})
export class CardOpportunitiesComponent implements OnChanges {
  @Input() openedOpportunities: Opportunity[];

  @Input() closedOpportunities: Opportunity[];

  isLoading = true;

  ngOnChanges(changes: SimpleChanges) {
    const isLoadActive = !changes.openedOpportunities?.currentValue;
    const isLoadClosed = !changes.closedOpportunities?.currentValue;

    this.isLoading = isLoadActive || isLoadClosed;
  }
}
