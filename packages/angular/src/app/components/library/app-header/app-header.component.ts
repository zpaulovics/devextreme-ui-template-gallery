import {
  Component, NgModule, Input, Output, EventEmitter, OnInit,
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { UserPanelModule, UserPanelComponent } from '../user-panel/user-panel.component';
import { AuthService, IUser } from 'src/app/services';
import { ThemeSwitcherModule } from 'src/app/components/library/theme-switcher/theme-switcher.component';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { DxButtonModule as DxButtonModule_1 } from 'devextreme-angular';

@Component({
    selector: 'app-header',
    templateUrl: 'app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
    standalone: true,
    imports: [
        DxToolbarModule,
        NgIf,
        ThemeSwitcherComponent,
        DxButtonModule_1,
        UserPanelComponent,
    ],
})

export class AppHeaderComponent implements OnInit {
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

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser().then((e) => this.user = e.data);
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  };
}

@NgModule({
    imports: [
        CommonModule,
        DxButtonModule,
        DxToolbarModule,
        ThemeSwitcherModule,
        UserPanelModule,
        AppHeaderComponent,
    ],
    exports: [AppHeaderComponent],
})
export class AppHeaderModule { }
