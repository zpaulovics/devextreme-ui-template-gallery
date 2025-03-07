import { NgStyle } from '@angular/common';
import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { DxFileUploaderModule as DxFileUploaderModule_1 } from 'devextreme-angular';

@Component({
    selector: 'form-photo',
    templateUrl: './form-photo.component.html',
    styleUrls: ['./form-photo.component.scss'],
    imports: [NgStyle, DxFileUploaderModule_1]
})
export class FormPhotoComponent implements OnInit {
  private elRef = inject(ElementRef);

  @Input() link: string;

  @Input() editable = false;

  @Input() size = 124;

  imageUrl: string;

  hostRef = this.elRef.nativeElement;

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  ngOnInit() {
    this.imageUrl = `url('data:image/png;base64,${this.link}')`;
  }
}
