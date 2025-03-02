import {
  Component,
  NgModule,
  Input,
} from '@angular/core';
import { CardAnalyticsModule, CardAnalyticsComponent } from '../../library/card-analytics/card-analytics.component';
import { DxChartModule } from 'devextreme-angular/ui/chart';
import { Sales } from 'src/app/types/analytics';

@Component({
    selector: 'revenue-card',
    templateUrl: './revenue-card.component.html',
    standalone: true,
    imports: [CardAnalyticsComponent, DxChartModule],
})
export class RevenueCardComponent {
  @Input() data: Sales;
}

@NgModule({
    imports: [
        CardAnalyticsModule,
        DxChartModule,
        RevenueCardComponent,
    ],
    exports: [RevenueCardComponent],
})
export class RevenueCardModule { }
