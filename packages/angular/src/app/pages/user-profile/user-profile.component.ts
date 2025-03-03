import { ChangeDetectorRef, Component, NgModule, inject } from '@angular/core';
import { CommonModule, NgIf, AsyncPipe } from '@angular/common';
import notify from 'devextreme/ui/notify';
import {
  DxButtonModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxToolbarModule,
  DxFormModule,
  DxNumberBoxModule,
  DxDateBoxModule,
  DxLoadPanelModule,
  DxFileUploaderModule,
  DxScrollViewModule,
} from 'devextreme-angular';
import { forkJoin } from 'rxjs';
import { PhonePipeModule } from 'src/app/pipes/phone.pipe';
import {
  FormPhotoModule,
  FormTextboxModule,
  ChangeProfilePasswordFormModule,
  ProfileCardModule,
  FormPopupModule,
} from 'src/app/components';
import { DataService, ScreenService } from 'src/app/services';
import { DxToolbarModule as DxToolbarModule_1 } from 'devextreme-angular/ui/toolbar';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { DxLoadPanelModule as DxLoadPanelModule_1 } from 'devextreme-angular/ui/load-panel';
import { ProfileCardComponent } from '../../components/library/profile-card/profile-card.component';
import { FormPhotoComponent } from '../../components/utils/form-photo/form-photo.component';
import { ChangeProfilePasswordFormComponent } from '../../components/library/change-profile-password-form/change-profile-password-form.component';
import { PhonePipe } from '../../pipes/phone.pipe';

@Component({
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    providers: [DataService],
    imports: [
        DxToolbarModule_1,
        DxiItemModule,
        DxButtonModule,
        DxLoadPanelModule_1,
        DxScrollViewModule,
        ProfileCardComponent,
        FormPhotoComponent,
        ChangeProfilePasswordFormComponent,
        AsyncPipe,
        PhonePipe
    ]
})
export class UserProfileComponent {
  private service = inject(DataService);
  screen = inject(ScreenService);
  private ref = inject(ChangeDetectorRef);

  profileId = 22;

  profileData: Record<string, any>;

  savedProfileData: Record<string, any>;

  isLoading = true;

  supervisorsList = [];

  isChangePasswordPopupOpened = false;

  isDataChanged = false;

  isContentScrolled = false;

  basicInfoItems: Record<string, any>[] = this.getBasicInfoItems();

  contactItems: Record<string, any>[] = this.getContactItems();

  addressItems: Record<string, any>[] = this.getAddressItems();

  constructor() {
    const service = this.service;

    forkJoin([
      service.getSupervisors(),
      service.getProfile(this.profileId)
    // @ts-ignore
    ]).subscribe(([supervisorsList, profileData]) => {
      this.supervisorsList.length = 0;
      // @ts-ignore
      this.supervisorsList.push(...supervisorsList);
      this.profileData = profileData;
      this.setSavedData();
      this.isLoading = false;
    });
  }

  getBasicInfoItems(){
    return [
      { dataField: 'firstName', colSpan: 2 },
      { dataField: 'lastName', colSpan: 2 },
      {
        dataField: 'department',
        editorType: 'dxSelectBox',
        colSpan: 1,
        editorOptions: {
          items: ['UI/UX', 'Backend Developers'],
        }
      },
      {
        dataField: 'position',
        editorType: 'dxSelectBox',
        colSpan: 1,
        editorOptions: {
          items: ['Designer', 'Developer', 'Technical Writer'],
        }
      },
      {
        dataField: 'hiredDate',
        editorType: 'dxDateBox',
        colSpan: 1,
        editorOptions: {
          max: new Date(),
        }
      },
      {
        dataField: 'birthDate',
        colSpan: 1,
        editorType: 'dxDateBox',
        editorOptions: {
          max: new Date(),
        }
      },
    ]
  }

  getContactItems() {
    return [
      {
        dataField: 'phone',
        editorOptions: {
          mask: '+1(000)000-0000',
        }
      },
      {
        dataField: 'email',
        validators: [
          {type: 'email'}
        ]
      },
      {
        dataField: 'domainUsername',
        colSpan: 2,
      },
      {
        dataField: 'status',
        colSpan: 2,
      },
      {
        dataField: 'supervisor',
        label: 'Supervisor',
        colSpan: 2,
        itemsList: this.supervisorsList,
        editorType: 'dxSelectBox',
      },
    ];
  }

  getAddressItems() {
    return [
      { dataField: 'country' },
      { dataField: 'city' },
      {
        dataField: 'state',
        colSpan: 2,
        label: 'State/province/area',
        editorOptions: {
          label: 'State/province/area',
        }
      },
      {
        dataField: 'address',
        colSpan: 2,
      },
      {
        dataField: 'zipCode',
        editorType: 'dxNumberBox',
        colSpan: 2,
      },
    ];
  }

  dataChanged() {
    this.isDataChanged = true;
  }

  setSavedData(data = this.profileData) {
    this.savedProfileData = JSON.parse(JSON.stringify(data));
  }

  copyToClipboard(text, evt) {
    window.navigator.clipboard?.writeText(text);
    const tipText = 'Text copied';
    notify({
        message: tipText,
        minWidth: `${tipText.length + 2}ch`,
        width: 'auto',
        position: {of: evt.target, offset:'0 -30'}
      },
      'info', 500);
  };

  changePassword() {
    this.isChangePasswordPopupOpened = true;
  };

  cancel() {
    this.profileData = this.savedProfileData;
    this.ref.detectChanges();
    this.setSavedData();

    setTimeout(() => {
      this.isDataChanged = false;
    });
  }

  save() {
    notify({message: 'Data saved', position: {at: 'bottom center', my: 'bottom center'}}, 'success');
    this.isDataChanged = false;
    this.setSavedData();
  }

  scroll({reachedTop = false}) {
    this.isContentScrolled = !reachedTop;
  }

}

@NgModule({
    imports: [
        DxButtonModule,
        DxDateBoxModule,
        DxFormModule,
        DxFileUploaderModule,
        DxNumberBoxModule,
        DxToolbarModule,
        DxSelectBoxModule,
        DxScrollViewModule,
        DxLoadPanelModule,
        DxTextBoxModule,
        FormTextboxModule,
        FormPhotoModule,
        FormPopupModule,
        ProfileCardModule,
        ChangeProfilePasswordFormModule,
        CommonModule,
        PhonePipeModule,
        UserProfileComponent,
    ],
    providers: [],
    exports: [],
})
export class UserProfileListModule { }
