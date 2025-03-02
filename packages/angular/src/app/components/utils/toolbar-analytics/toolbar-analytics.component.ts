import { Component, NgModule, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule, NgIf, AsyncPipe } from '@angular/common';

import { ScreenService } from 'src/app/services';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTabsModule } from 'devextreme-angular/ui/tabs';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { DxTabsTypes } from 'devextreme-angular/ui/tabs';

import { Dates, PanelItem } from 'src/app/types/resource';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxButtonModule as DxButtonModule_1 } from 'devextreme-angular';

@Component({
    selector: 'toolbar-analytics',
    templateUrl: './toolbar-analytics.component.html',
    styleUrls: ['./toolbar-analytics.component.scss'],
    standalone: true,
    imports: [DxToolbarModule, DxiItemModule, DxTabsModule, DxButtonModule_1, AsyncPipe]
})

export class ToolbarAnalyticsComponent {
  protected screen = inject(ScreenService);

  @Input() selectedItems: Array<number>;

  @Input() titleText: string;

  @Input() panelItems: Array<PanelItem>;

  @Output() selectionChanged = new EventEmitter<Dates>();

  selectionChange(e: DxTabsTypes.SelectionChangedEvent) {
    const dates = e.addedItems[0].value.split('/');

    this.selectionChanged.emit({ startDate: dates[0], endDate: dates[1] });
  }
}

@NgModule({
    imports: [
        CommonModule,
        DxButtonModule,
        DxTabsModule,
        DxToolbarModule,
        ToolbarAnalyticsComponent
    ],
    exports: [ToolbarAnalyticsComponent],
})
export class ToolbarAnalyticsModule { }
