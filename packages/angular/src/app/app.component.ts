import { Component, HostBinding, OnDestroy, inject } from '@angular/core';
import { AppInfoService, AuthService, ScreenService, ThemeService } from './services';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet]
})
export class AppComponent implements OnDestroy {
  private authService = inject(AuthService);
  private themeService = inject(ThemeService);
  private screen = inject(ScreenService);
  appInfo = inject(AppInfoService);

  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter((cl) => this.screen.sizes[cl]).join(' ');
  }

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {
    const themeService = this.themeService;

    themeService.setAppTheme();
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }

  ngOnDestroy(): void {
    this.screen.breakpointSubscription.unsubscribe();
  }
}
