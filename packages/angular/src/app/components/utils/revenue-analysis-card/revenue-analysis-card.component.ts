import {
  Component,
  NgModule,
  Input,
} from '@angular/core';
import { CardAnalyticsModule, CardAnalyticsComponent } from '../../library/card-analytics/card-analytics.component';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxBulletModule } from 'devextreme-angular/ui/bullet';
import { SalesByState } from 'src/app/types/analytics';
import { DxDataGridModule as DxDataGridModule_1 } from 'devextreme-angular';
import { DxiColumnModule, DxoTooltipModule, DxoSizeModule } from 'devextreme-angular/ui/nested';
import { DxTemplateModule } from 'devextreme-angular/core';

@Component({
    selector: 'revenue-analysis-card',
    templateUrl: './revenue-analysis-card.component.html',
    styleUrls: ['./revenue-analysis-card.component.scss'],
    imports: [
        CardAnalyticsComponent,
        DxDataGridModule_1,
        DxiColumnModule,
        DxTemplateModule,
        DxBulletModule,
        DxoTooltipModule,
        DxoSizeModule,
    ]
})
export class RevenueAnalysisCardComponent {
  @Input() data: SalesByState;
}

@NgModule({
    imports: [
        CardAnalyticsModule,
        DxDataGridModule,
        DxBulletModule,
        RevenueAnalysisCardComponent,
    ],
    exports: [RevenueAnalysisCardComponent],
})
export class RevenueAnalysisCardModule { }