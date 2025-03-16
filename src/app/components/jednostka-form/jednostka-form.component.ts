import {
    Component, NgModule, Input,
    OnInit,
    OnChanges,
    SimpleChanges,
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
import { CameraCaptureModalService } from '../../services/cameraCaptureModalService';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../app-shared.module';
import { ToolbarFormModule } from '../toolbar-form/toolbar-form.component';
import { JednostkiApiService } from '../../services/JednostkiApiService';
import { FormSearchboxModule } from '../form-searchbox/form-searchbox.component';
//   import { ToolbarFormModule } from 'src/app/components/utils/toolbar-form/toolbar-form.component';
  
  @Component({
    selector: 'jednostka-form',
    templateUrl: './jednostka-form.component.html',
    styleUrls: ['./jednostka-form.component.scss'],
  })
  export class JednostkaFormComponent implements OnInit, OnChanges {
    @Input() jednostkaData: Jednostka|any;
  
    @Input() isLoading: boolean|any;
  
    savedData: Jednostka|any = null;
  
    isEditing = false;

    isModalOpen: boolean = false; 

    error: string = ""; 

    links = [
      'https://th.bing.com/th/id/R.ea17070f3a1a5b00a5bd7bd392fe7007?rik=jOK6fYqAeiqJTw&pid=ImgRaw&r=0', 
      'https://th.bing.com/th/id/R.f6d6d80853a18fbd6c397f2e34f97124?rik=hni8YgstVGAJAw&pid=ImgRaw&r=0', 
      'https://a.allegroimg.com/original/11b5e3/0ccfd087451ebb9edd0c8629d64d/Narzedzie-do-ROBIENIA-DZIUREK-w-paskach-KINZO'
    ]
  
    zipCodeValidator: ValidationRule = { type: 'pattern', pattern: /^\d{5}$/, message: 'Zip is invalid' };

    disabledValidationValidationRule = []; 

    productBoxItems: any; 
  
    constructor(private cameraService: CameraCaptureModalService, private apiService: JednostkiApiService) { 

    }

    ngOnInit(): void {
      this.cameraService.modalData$.subscribe((data) => {
        this.links.push(data); // Capture the data passed from the modal
        this.isModalOpen = false; // Close the modal
        this.productBoxItems = [{ name: this.jednostkaData.produktNazwa, id: this.jednostkaData.jednostkaId }] 
      });
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['jednostkaData']) 
      {
        this.productBoxItems = [{ name: this.jednostkaData.produktNazwa, id: this.jednostkaData.jednostkaId }] 
      }
    }

    openModal() { 
      this.isModalOpen = true;
    }

    handleEditClick() {
      this.savedData = { ...this.jednostkaData };
      this.isEditing = true;
    }
  
    handleSaveClick = async({ validationGroup }: DxButtonTypes.ClickEvent) => {
      if(!validationGroup.validate().isValid) return;
      var saveResult = await this.apiService.updateJednosta(this.jednostkaData); 
      if(saveResult == true)
      {
        this.isEditing = false;
        this.savedData = null;
      }
      else { 
        this.error = "Nie udało się zapisać danych"; 
      }
    }
  
    handleCancelClick() {
      this.jednostkaData = { ...this.savedData };
      this.error = ""; 
      this.isEditing = false;
    }

    produktTyping = async(input: string) => { 
      if (input != "")
      {
        const jednostkiSkrocone = await this.apiService.getSkrocona(100,1); 
        this.productBoxItems = jednostkiSkrocone.map(x => ({ name: x.produktNazwa, id: x.jednostkaId })); 
        this.jednostkaData.jednostkaId = null;
      }
    }

    produktWybrany(input: string) { 
      this.jednostkaData.jednostkaId = input; 
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
    FormGalleryModule, 
    SharedModule, 
    ToolbarFormModule, 
    FormSearchboxModule
],
    providers: [],
    exports: [JednostkaFormComponent],
    declarations: [JednostkaFormComponent],
  })
  export class ContactFormModule { }