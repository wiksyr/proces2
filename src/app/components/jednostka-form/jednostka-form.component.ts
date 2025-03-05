import {
    Component, NgModule, Input,
  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import {
    DxButtonModule,
    DxFormModule,
    DxLoadPanelModule,
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxToolbarModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxAccordionModule,
  } from 'devextreme-angular';
  import { ValidationRule } from 'devextreme-angular/common';
  import { DxButtonTypes } from 'devextreme-angular/ui/button';
import { Jednostka } from '../../models/Jednostka';
import { FormTextboxModule } from '../form-textbox/form-textbox.component';
import { FormPhotoModule } from '../form-photo/form-photo.component';
import { FormDateboxComponent, FormItemDateModule } from '../form-datebox/form-datebox-component';
import { FormGalleryModule } from "../form-gallery/form-gallery.component";
//   import { ToolbarFormModule } from 'src/app/components/utils/toolbar-form/toolbar-form.component';
  
  @Component({
    selector: 'jednostka-form',
    templateUrl: './jednostka-form.component.html',
    styleUrls: ['./jednostka-form.component.scss'],
  })
  export class JednostkaFormComponent {
    @Input() jednostkaData: Jednostka|any;
  
    @Input() isLoading: boolean|any;
  
    savedData: Jednostka|any = null;
  
    isEditing = false;

    links = [
      'https://th.bing.com/th/id/R.ea17070f3a1a5b00a5bd7bd392fe7007?rik=jOK6fYqAeiqJTw&pid=ImgRaw&r=0', 
      'https://th.bing.com/th/id/R.f6d6d80853a18fbd6c397f2e34f97124?rik=hni8YgstVGAJAw&pid=ImgRaw&r=0', 
      'https://a.allegroimg.com/original/11b5e3/0ccfd087451ebb9edd0c8629d64d/Narzedzie-do-ROBIENIA-DZIUREK-w-paskach-KINZO'
    ]
  
    zipCodeValidator: ValidationRule = { type: 'pattern', pattern: /^\d{5}$/, message: 'Zip is invalid' };
  
    handleEditClick() {
      this.savedData = { ...this.jednostkaData };
      this.isEditing = true;
    }
  
    handleSaveClick({ validationGroup }: DxButtonTypes.ClickEvent) {
      if(!validationGroup.validate().isValid) return;
      this.isEditing = false;
      this.savedData = null;
    }
  
    handleCancelClick() {
      this.jednostkaData = { ...this.savedData };
      this.isEditing = false;
    }
  }
  
  @NgModule({
    imports: [
    DxFormModule,
    DxAccordionModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxLoadPanelModule,
    DxValidationGroupModule,
    FormItemDateModule,
    FormTextboxModule,
    FormPhotoModule,
    DxValidatorModule,
    CommonModule,
    FormGalleryModule
],
    providers: [],
    exports: [JednostkaFormComponent],
    declarations: [JednostkaFormComponent],
  })
  export class ContactFormModule { }