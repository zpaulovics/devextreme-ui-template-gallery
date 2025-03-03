import { Component, NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';
import { ThemeService } from 'src/app/services';

@Component({
    selector: 'theme-switcher',
    template: `
    <dx-button class="theme-button"
      stylingMode="text"
      [icon]="themeService.currentTheme !== 'dark' ? 'moon' : 'sun'"
      (onClick)="onButtonClick()"
     />
`,
    styleUrls: [],
    imports: [DxButtonModule]
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);


  onButtonClick () {
    this.themeService.switchTheme();
  }
}

@NgModule({
    imports: [CommonModule, DxButtonModule, ThemeSwitcherComponent],
    exports: [ThemeSwitcherComponent],
})
export class ThemeSwitcherModule { }
