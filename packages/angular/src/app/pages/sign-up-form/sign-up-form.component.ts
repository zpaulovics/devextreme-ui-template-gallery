import { Component, NgModule } from '@angular/core';

import { CardAuthModule, CreateAccountFormModule } from 'src/app/components';
import { CardAuthComponent } from '../../components/library/card-auth/card-auth.component';
import { CreateAccountFormComponent } from '../../components/library/create-account-form/create-account-form.component';

@Component({
    selector: 'app-sign-up-form',
    templateUrl: './sign-up-form.component.html',
    styleUrls: ['./sign-up-form.component.scss'],
    imports: [CardAuthComponent, CreateAccountFormComponent]
})
export class AppSignUpComponent {

  defaultLink = '/sign-in-form';

  buttonLink = '/sign-up-form';

  constructor() { }
}

@NgModule({
    imports: [
        CreateAccountFormModule,
        CardAuthModule,
        AppSignUpComponent,
    ],
    providers: [],
    exports: [AppSignUpComponent],
})
export class AppSignUpComponentModule { }

