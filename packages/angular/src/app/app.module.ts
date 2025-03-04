import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxHttpModule } from 'devextreme-angular/http';

import { AppComponent } from './app.component';



import { AuthService, ScreenService, AppInfoService } from './services';

import { AppRoutingModule } from './app-routing.module';


import { PlanningTaskListModule } from './pages/planning-task-list/planning-task-list.component';




import { ThemeService } from './services';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DxHttpModule,
    PlanningTaskListModule,
    AppRoutingModule,
],
  providers: [AuthService, ScreenService, AppInfoService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
