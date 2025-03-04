import { Component, NgModule, Input, ViewChild, ElementRef } from '@angular/core';


import { DxListModule, DxListTypes } from 'devextreme-angular/ui/list';
import { IUser } from '../../../services/auth.service';

@Component({
    selector: 'user-menu-section',
    templateUrl: 'user-menu-section.component.html',
    styleUrls: ['./user-menu-section.component.scss'],
    imports: [DxListModule]
})

export class UserMenuSectionComponent {
  @Input()
  menuItems: any;

  @Input()
  showAvatar!: boolean;

  @Input()
  user!: IUser | null;

  @ViewChild('userInfoList', { read: ElementRef }) userInfoList: ElementRef<HTMLElement>;

  constructor() {}

  handleListItemClick(e: DxListTypes.ItemClickEvent) {
    e.itemData?.onClick();
  }
}


