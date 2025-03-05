import { CommonModule } from '@angular/common';
import {
  Component, ElementRef, Input, NgModule, OnInit,
} from '@angular/core';
import { DxFileUploaderModule } from 'devextreme-angular/ui/file-uploader';
import { FormPhotoModule } from '../form-photo/form-photo.component';
import { DxButtonModule, DxTextBoxModule, DxToolbarModule } from 'devextreme-angular';

@Component({
  selector: 'form-gallery',
  templateUrl: './form-gallery.component.html',
  styleUrls: ['./form-gallery.component.scss'],
})
export class FormGalleryComponent implements OnInit {
  @Input() links: string[]|any;

  @Input() editable = false;

  @Input() size = 124;

  link: string|any;

  hostRef: any;

  currentPhoto: number = 0;

  constructor(private elRef:ElementRef) {
    this.hostRef = this.elRef.nativeElement;
  }

  ngOnInit() {
    this.loadPhoto(); 
  }

  loadPhoto() { 
    console.log(this.links[this.currentPhoto]); 
    this.link = this.links[this.currentPhoto];// `url('data:image/png;base64,${this.link}')`;
    console.log(this.link); 
  }

  moveNext() { 
    this.currentPhoto += 1; 
    if(this.currentPhoto > this.links.length - 1) { 
        this.currentPhoto = this.links.length - 1; 
    }
    this.loadPhoto(); 
  }

  movePrevious() { 
    this.currentPhoto -=1; 
    if(this.currentPhoto < 0) { 
        this.currentPhoto = 0; 
    }
    this.loadPhoto(); 
  }

}

@NgModule({
  imports: [
    DxFileUploaderModule,
    DxToolbarModule, 
    DxTextBoxModule,
    DxButtonModule,
    FormPhotoModule,
    CommonModule
  ],
  declarations: [FormGalleryComponent],
  exports: [FormGalleryComponent],
})
export class FormGalleryModule { }