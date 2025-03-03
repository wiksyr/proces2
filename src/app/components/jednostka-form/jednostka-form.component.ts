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
    ],
    providers: [],
    exports: [JednostkaFormComponent],
    declarations: [JednostkaFormComponent],
  })
  export class ContactFormModule { }