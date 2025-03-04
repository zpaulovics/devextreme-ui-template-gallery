import { Component, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxScrollViewModule } from 'devextreme-angular/ui/scroll-view';
import { CardAuthModule, CardAuthComponent } from '../../components/library/card-auth/card-auth.component'
import { DxScrollViewModule as DxScrollViewModule_1 } from 'devextreme-angular';

@Component({
    selector: 'app-single-card',
    templateUrl: './single-card.component.html',
    styleUrls: ['./single-card.component.scss'],
    imports: [DxScrollViewModule_1, CardAuthComponent]
})
export class SingleCardComponent {
  @Input()
  title!: string;

  @Input()
  description!: string;

  constructor() { }
}

@NgModule({
    imports: [CommonModule, DxScrollViewModule, CardAuthModule, SingleCardComponent],
    exports: [SingleCardComponent],
})
export class SingleCardModule {

}
