import {
  Component, OnInit, NgModule,
} from '@angular/core';

import { map, share } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';

import { DxPieChartModule } from 'devextreme-angular/ui/pie-chart';
import { DxChartModule } from 'devextreme-angular/ui/chart';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxFunnelModule } from 'devextreme-angular/ui/funnel';
import { DxBulletModule } from 'devextreme-angular/ui/bullet';
import { DxLoadPanelModule } from 'devextreme-angular/ui/load-panel';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';

import { DataService } from 'src/app/services';










import { analyticsPanelItems, Dates } from 'src/app/types/resource';
import {
  Sales, SalesByState, SalesByStateAndCity, SalesOrOpportunitiesByCategory,
} from 'src/app/types/analytics';

import { DxScrollViewModule as DxScrollViewModule_1 } from 'devextreme-angular';
import { ToolbarAnalyticsComponent } from '../../components/utils/toolbar-analytics/toolbar-analytics.component';
import { OpportunitiesTickerComponent } from '../../components/utils/opportunities-ticker/opportunities-ticker.component';
import { RevenueTotalTickerComponent } from '../../components/utils/revenue-total-ticker/revenue-total-ticker.component';
import { ConversionTickerComponent } from '../../components/utils/conversion-ticker/conversion-ticker.component';
import { LeadsTickerComponent } from '../../components/utils/leads-ticker/leads-ticker.component';
import { RevenueCardComponent } from '../../components/utils/revenue-card/revenue-card.component';
import { ConversionCardComponent } from '../../components/utils/conversion-card/conversion-card.component';
import { RevenueAnalysisCardComponent } from '../../components/utils/revenue-analysis-card/revenue-analysis-card.component';
import { RevenueSnapshotCardComponent } from '../../components/utils/revenue-snapshot-card/revenue-snapshot-card.component';

type DashboardData = SalesOrOpportunitiesByCategory | Sales | SalesByState | SalesByStateAndCity | null;
type DataLoader = (startDate: string, endDate: string) => Observable<Object>;

@Component({
    templateUrl: './analytics-dashboard.component.html',
    styleUrls: ['./analytics-dashboard.component.scss'],
    providers: [DataService],
    imports: [DxScrollViewModule_1, ToolbarAnalyticsComponent, OpportunitiesTickerComponent, RevenueTotalTickerComponent, ConversionTickerComponent, LeadsTickerComponent, RevenueCardComponent, ConversionCardComponent, RevenueAnalysisCardComponent, RevenueSnapshotCardComponent, DxLoadPanelModule]
})
export class AnalyticsDashboardComponent implements OnInit {
  analyticsPanelItems = analyticsPanelItems;

  opportunities: SalesOrOpportunitiesByCategory = null;
  sales: Sales = null;
  salesByState: SalesByState = null;
  salesByCategory: SalesByStateAndCity = null;

  isLoading: boolean = true;

  constructor(private service: DataService) {}

  selectionChange(dates: Dates) {
    this.loadData(dates.startDate, dates.endDate);
  }

  customizeSaleText(arg: { percentText: string }) {
    return arg.percentText;
  }

  loadData = (startDate: string, endDate: string) => {
    this.isLoading = true;
    const tasks: Observable<object>[] = [
      ['opportunities', this.service.getOpportunitiesByCategory],
      ['sales', this.service.getSales],
      ['salesByCategory', this.service.getSalesByCategory],
      ['salesByState', (startDate: string, endDate: string) => this.service.getSalesByStateAndCity(startDate, endDate).pipe(
        // @ts-ignore
        map((data) => this.service.getSalesByState(data))
      )
      ]
    // @ts-ignore  
    ].map(([dataName, loader]: [string, DataLoader]) => {
      const loaderObservable = loader(startDate, endDate).pipe(share());

      loaderObservable.subscribe((result: DashboardData) => {
        this[dataName] = result;
      });

      return loaderObservable;
    });

    forkJoin(tasks).subscribe(() => {
      this.isLoading = false;
    });
  };

  ngOnInit(): void {
    const [startDate, endDate] = analyticsPanelItems[4].value.split('/');

    this.loadData(startDate, endDate);
  }
}


