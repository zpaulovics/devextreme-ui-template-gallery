import { Component, NgModule, Input, Output, EventEmitter, OnInit, inject } from '@angular/core';


import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { UserPanelComponent } from '../user-panel/user-panel.component';
import { AuthService, IUser } from 'src/app/services';

import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { DxButtonModule as DxButtonModule_1 } from 'devextreme-angular';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
    imports: [DxToolbarModule, ThemeSwitcherComponent, DxButtonModule_1, UserPanelComponent]
})

export class AppHeaderComponent implements OnInit {
  private authService = inject(AuthService);

  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  user: IUser | null = { email: '' };

  userMenuItems = [
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    },
  }];

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  ngOnInit() {
    this.authService.getUser().then((e) => this.user = e.data);
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}


