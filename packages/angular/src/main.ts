import themes from 'devextreme/ui/themes';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AuthService, ScreenService, AppInfoService, ThemeService } from './app/services';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { DxHttpModule } from 'devextreme-angular/http';
import { PlanningTaskListModule } from './app/pages/planning-task-list/planning-task-list.component';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

themes.initialized(() => {
  bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, DxHttpModule, PlanningTaskListModule, AppRoutingModule),
        AuthService, ScreenService, AppInfoService, ThemeService,
    ]
})
    .catch((err) => console.error(err));

});

