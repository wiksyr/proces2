import { CommonModule } from '@angular/common';
import {
  Component, ElementRef, Input, NgModule, OnInit,
} from '@angular/core';
import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';

@Component({
  selector: 'form-photo',
  templateUrl: './form-photo.component.html',
  styleUrls: ['./form-photo.component.scss'],
})
export class FormPhotoComponent implements OnInit {
  @Input() link: string|any;

  @Input() editable = false;

  @Input() size = 124;

  imageUrl: string|any;

  hostRef: any;

  constructor(private elRef:ElementRef) {
    this.hostRef = this.elRef.nativeElement;
  }

  ngOnInit() {
    this.imageUrl = `url('${this.link}')`;// `url('data:image/png;base64,${this.link}')`;
  }
}

@NgModule({
  imports: [
    DxFileUploaderModule,
    CommonModule
  ],
  declarations: [FormPhotoComponent],
  exports: [FormPhotoComponent],
})
export class FormPhotoModule { }