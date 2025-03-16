import {Component, EventEmitter, Input, NgModule, OnChanges, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxValidatorModule
} from 'devextreme-angular';
import { ValidationRule } from 'devextreme-angular/common';

@Component({
  selector: 'form-searchbox',
  templateUrl: './form-searchbox.component.html',
  styleUrls: ['form-searchbox.component.scss'],
})
export class FormSearchboxComponent implements OnChanges {
  @Input() isEditing = false;

  @Input() text: string|undefined;

  @Input() items: any; 

  @Input() label = '';

  @Input() mask: string = "";

  @Input() icon: string = "folder";

  @Input() validators: ValidationRule[] = [{ type: 'required' }];

  @Input() value!: string;

  @Output() valueChange = new EventEmitter<string>();

  @Output() keyDowned = new EventEmitter<any>(); 

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  valueChanged(e:any) {
    this.valueChange.emit(e.value);
  }

  onSearch(e:any) { 
    this.keyDowned.emit(e.event.target.value); 
  }

}

@NgModule({
  imports: [
    DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxSelectBoxModule, 
    CommonModule,
  ],
  declarations: [FormSearchboxComponent],
  exports: [FormSearchboxComponent],
})
export class FormSearchboxModule { }