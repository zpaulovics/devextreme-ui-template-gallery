import { Component, Input} from '@angular/core';
import { CardAnalyticsComponent } from '../../library/card-analytics/card-analytics.component';
import { DxBulletModule } from 'devextreme-angular/ui/bullet';
import { SalesByStateAndCity } from 'src/app/types/analytics';
import { DxDataGridModule as DxDataGridModule_1 } from 'devextreme-angular';
import { DxiColumnModule } from 'devextreme-angular/ui/nested';

@Component({
    selector: 'revenue-analysis-by-states-card',
    templateUrl: './revenue-analysis-by-states-card.component.html',
    styleUrls: ['./revenue-analysis-by-states-card.component.scss'],
    imports: [CardAnalyticsComponent, DxDataGridModule_1, DxiColumnModule, DxBulletModule]
})
export class RevenueAnalysisByStatesCardComponent {
  @Input() data: SalesByStateAndCity;
}
