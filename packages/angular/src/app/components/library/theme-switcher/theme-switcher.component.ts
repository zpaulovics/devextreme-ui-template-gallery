import { Component, NgModule, inject } from '@angular/core';

import { DxButtonModule } from 'devextreme-angular';
import { ThemeService } from 'src/app/services';

@Component({
    selector: 'theme-switcher',
    template: `
    <dx-button
      class="theme-button"
      stylingMode="text"
      [icon]="themeService.currentTheme !== 'dark' ? 'moon' : 'sun'"
      (onClick)="onButtonClick()"
    ></dx-button>
`,
    styleUrls: [],
    imports: [DxButtonModule]
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  onButtonClick () {
    this.themeService.switchTheme();
  }
}


