import { Component, Input } from '@angular/core';
import { CardAnalyticsComponent } from '../../library/card-analytics/card-analytics.component';
import { DxBulletModule } from 'devextreme-angular/ui/bullet';
import { SalesByState } from 'src/app/types/analytics';
import { DxDataGridModule as DxDataGridModule_1 } from 'devextreme-angular';
import { DxiColumnModule, DxoTooltipModule, DxoSizeModule } from 'devextreme-angular/ui/nested';
import { DxTemplateModule } from 'devextreme-angular/core';

@Component({
    selector: 'revenue-analysis-card',
    templateUrl: './revenue-analysis-card.component.html',
    styleUrls: ['./revenue-analysis-card.component.scss'],
    imports: [CardAnalyticsComponent, DxDataGridModule_1, DxiColumnModule, DxTemplateModule, DxBulletModule, DxoTooltipModule, DxoSizeModule]
})
export class RevenueAnalysisCardComponent {
  @Input() data: SalesByState;
}

