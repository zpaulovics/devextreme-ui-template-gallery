import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardAuthModule, LoginFormModule } from 'src/app/components';
import { CardAuthComponent } from '../../components/library/card-auth/card-auth.component';
import { LoginFormComponent } from '../../components/library/login-form/login-form.component';

@Component({
    selector: 'app-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: ['./sign-in-form.component.scss'],
    standalone: true,
    imports: [CardAuthComponent, LoginFormComponent]
})
export class AppSignInComponent {
  constructor() { }
}

@NgModule({
    imports: [
        CommonModule,
        LoginFormModule,
        CardAuthModule,
        AppSignInComponent,
    ],
    providers: [],
    exports: [AppSignInComponent],
})
export class AppSignInModule { }
