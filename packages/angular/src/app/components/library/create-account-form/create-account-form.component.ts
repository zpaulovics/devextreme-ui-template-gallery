import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule, Input, OnInit } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';

import { LoginOauthModule } from 'src/app/components/library/login-oauth/login-oauth.component';
import { ValidationCallbackData } from 'devextreme-angular/common';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { AuthService, IResponse } from 'src/app/services';
import { DxiItemModule, DxiValidationRuleModule, DxoLabelModule, DxoButtonOptionsModule } from 'devextreme-angular/ui/nested';
import { DxTemplateModule } from 'devextreme-angular/core';
import { LoginOauthComponent } from '../login-oauth/login-oauth.component';

@Component({
    selector: 'app-create-account-form',
    templateUrl: './create-account-form.component.html',
    styleUrls: ['./create-account-form.component.scss'],
    imports: [DxFormModule, DxiItemModule, DxiValidationRuleModule, DxoLabelModule, RouterLink, DxoButtonOptionsModule, DxTemplateModule, NgIf, DxLoadIndicatorModule, LoginOauthComponent]
})
export class CreateAccountFormComponent implements OnInit {
  @Input() redirectLink = '/auth/login';
  @Input() buttonLink = '/auth/login';
  loading = false;

  defaultAuthData: IResponse;

  formData: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  async onSubmit(e: Event) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;

    const result = await this.authService.createAccount(email, password);
    this.loading = false;

    if (result.isOk) {
      this.router.navigate([this.buttonLink]);
    } else {
      notify(result.message, 'error', 2000);
    }
  }

  confirmPassword = (e: ValidationCallbackData) => e.value === this.formData.password;

  async ngOnInit(): Promise<void> {
    this.defaultAuthData = await this.authService.getUser();
  }
}
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoginOauthModule,
        DxFormModule,
        DxLoadIndicatorModule,
        CreateAccountFormComponent,
    ],
    exports: [CreateAccountFormComponent],
})
export class CreateAccountFormModule { }
