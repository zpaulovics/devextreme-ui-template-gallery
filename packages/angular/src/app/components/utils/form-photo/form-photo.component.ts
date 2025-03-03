import { CommonModule, NgStyle, NgIf } from '@angular/common';
import { Component, ElementRef, Input, NgModule, OnInit, inject } from '@angular/core';
import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';
import { DxFileUploaderModule as DxFileUploaderModule_1 } from 'devextreme-angular';

@Component({
    selector: 'form-photo',
    templateUrl: './form-photo.component.html',
    styleUrls: ['./form-photo.component.scss'],
    imports: [
        NgStyle,
        DxFileUploaderModule_1
    ]
})
export class FormPhotoComponent implements OnInit {
  private elRef = inject(ElementRef);

  @Input() link: string;

  @Input() editable = false;

  @Input() size = 124;

  imageUrl: string;

  hostRef = this.elRef.nativeElement;

  ngOnInit() {
    this.imageUrl = `url('data:image/png;base64,${this.link}')`;
  }
}

@NgModule({
    imports: [
        DxFileUploaderModule,
        CommonModule,
        FormPhotoComponent
    ],
    exports: [FormPhotoComponent],
})
export class FormPhotoModule { }
