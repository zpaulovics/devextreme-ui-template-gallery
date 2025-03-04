
import { Component, NgModule, Input, OnInit, inject } from '@angular/core';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { AuthService, IResponse } from 'src/app/services';
import { DxiItemModule, DxiValidationRuleModule, DxoLabelModule, DxoButtonOptionsModule } from 'devextreme-angular/ui/nested';
import { DxTemplateModule } from 'devextreme-angular/core';

const notificationText = 'We\'ve sent a link to reset your password. Check your inbox.';

@Component({
    selector: 'reset-password-form',
    templateUrl: './reset-password-form.component.html',
    styleUrls: ['./reset-password-form.component.scss'],
    imports: [DxFormModule, DxiItemModule, DxiValidationRuleModule, DxoLabelModule, DxoButtonOptionsModule, DxTemplateModule, DxLoadIndicatorModule, RouterLink]
})
export class ResetPasswordFormComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);

  @Input() signInLink = '/auth/login';

  @Input() buttonLink = '/auth/login';

  defaultAuthData: IResponse;

  loading = false;

  formData: any = {};

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  async onSubmit(e: Event) {
    e.preventDefault();
    const { email } = this.formData;
    this.loading = true;

    const result = await this.authService.resetPassword(email);
    this.loading = false;

    if (result.isOk) {
      this.router.navigate([this.buttonLink]);
      notify(notificationText, 'success', 2500);
    } else {
      notify(result.message, 'error', 2000);
    }
  }

  async ngOnInit(): Promise<void> {
    this.defaultAuthData = await this.authService.getUser();
  }
}

