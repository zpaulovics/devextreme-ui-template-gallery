import { Component, NgModule } from '@angular/core';


import { CardAuthModule, ResetPasswordFormModule } from 'src/app/components';
import { CardAuthComponent } from '../../components/library/card-auth/card-auth.component';
import { ResetPasswordFormComponent } from '../../components/library/reset-password-form/reset-password-form.component';

@Component({
    selector: 'app-reset-password-form',
    templateUrl: './reset-password-form.component.html',
    styleUrls: ['./reset-password-form.component.scss'],
    standalone: true,
    imports: [CardAuthComponent, ResetPasswordFormComponent]
})
export class AppResetPasswordComponent {

  defaultLink = '/sign-in-form';

  buttonLink = '/reset-password-form';

  constructor() { }

}

@NgModule({
    imports: [
        CardAuthModule,
        ResetPasswordFormModule,
        AppResetPasswordComponent,
    ],
    providers: [],
    exports: [AppResetPasswordComponent],
})
export class AppResetPasswordModule { }

