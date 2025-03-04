import { Component, NgModule } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <footer><ng-content></ng-content></footer>
  `,
    styleUrls: ['./app-footer.component.scss']
})

export class AppFooterComponent {

}

@NgModule({
    imports: [AppFooterComponent],
    exports: [AppFooterComponent],
})
export class AppFooterModule { }
