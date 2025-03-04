import { Component, NgModule, Output, Input, EventEmitter, HostBinding, inject } from '@angular/core';

import {
  DxButtonModule,
} from 'devextreme-angular';
import { DxButtonTypes } from 'devextreme-angular/ui/button';
import {DataService, ScreenService} from 'src/app/services';

@Component({
    selector: 'right-side-panel',
    templateUrl: './right-side-panel.component.html',
    styleUrls: ['./right-side-panel.component.scss'],
    providers: [DataService],
    imports: [DxButtonModule]
})
export class RightSidePanelComponent {
  protected screen = inject(ScreenService);

  @Input() isOpened = false;

  @Input() showOpenButton = true;

  @Input() title = '';

  @Output() openedChange = new EventEmitter<boolean>();

  @HostBinding('class.overlapping') get overlapping() { return !this.isLarge; };

  @HostBinding('class.closed-state-hidden') get closedStateHidden() { return !this.showOpenButton; };

  @HostBinding('class.open') get open() { return this.isOpened; };

  isLarge = this.screen.sizes['screen-large'];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    const screen = this.screen;

    screen.screenChanged.subscribe(({isLarge, isXLarge}) => {
      this.isLarge = isLarge || isXLarge;
    });
  }


  toggleOpen = () => {
    this.isOpened = !this.isOpened;
    this.openedChange.emit(this.isOpened);
  };
}


