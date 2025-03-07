
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Router } from '@angular/router';
import { SingleCardComponent } from '../single-card/single-card.component';

@Component({
    selector: 'app-unauthenticated-content',
    template: `
    <app-single-card [title]="title" [description]="description">
      <router-outlet />
    </app-single-card>
  `,
    styles: [`
    :host {
      width: 100%;
      height: 100%;
    }
  `],
    imports: [SingleCardComponent, RouterOutlet]
})
export class UnauthenticatedContentComponent {
  private router = inject(Router);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() { }

  get description() {
    const path = this.router.url.split('/').at(-1);
    switch (path) {
      case 'reset-password': return 'Please enter the email address that you used to register, and we will send you a link to reset your password via Email.';
      default: return '';
    }
  }

  get title() {
    const path = this.router.url.split('/').at(-1);
    switch (path) {
      case 'login': return 'Sign In';
      case 'reset-password': return 'Reset Password';
      case 'create-account': return 'Sign Up';
      case 'change-password': return 'Change Password';
      default: return '';
    }
  }
}
