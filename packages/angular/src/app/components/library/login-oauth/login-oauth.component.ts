import { Component, NgModule } from '@angular/core';
import { DxButtonModule, DxButtonTypes } from 'devextreme-angular/ui/button';
import { ThemeService } from '../../../services/theme.service';
import { DxButtonModule as DxButtonModule_1 } from 'devextreme-angular';

@Component({
    selector: 'app-login-oauth',
    templateUrl: './login-oauth.component.html',
    styleUrls: ['./login-oauth.component.scss'],
    imports: [DxButtonModule_1]
})
export class LoginOauthComponent {
  btnStylingMode: DxButtonTypes.ButtonStyle;

  constructor(private themeService: ThemeService) {
    this.themeService.isDark.subscribe((value: boolean) => {
      this.btnStylingMode = value ? 'outlined' : 'contained';
    });
  }


}

@NgModule({
    imports: [
        DxButtonModule,
        LoginOauthComponent
    ],
    exports: [LoginOauthComponent],
})
export class LoginOauthModule { }
