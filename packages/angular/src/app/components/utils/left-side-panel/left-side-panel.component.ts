import { Component, inject } from '@angular/core';

import { DxButtonModule, DxScrollViewModule } from 'devextreme-angular';
import { ScreenService } from 'src/app/services';

@Component({
    selector: 'left-side-panel',
    templateUrl: './left-side-panel.component.html',
    styleUrls: ['./left-side-panel.component.scss'],
    imports: [DxButtonModule, DxScrollViewModule]
})
export class LeftSidePanelComponent {
  protected screen = inject(ScreenService);

  isSmallScreen = false;
  isOpened = !(this.screen.sizes['screen-x-small'] || this.screen.sizes['screen-small']);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    const screen = this.screen;

    screen.smallScreenChanged.subscribe((isSmall) => {
      this.isSmallScreen = isSmall;

      if (!isSmall) {
        this.isOpened = true;
      }
    });
  }

  toggleOpen = () => {
    this.isOpened = !this.isOpened;
  };
}
