import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxButtonModule,
  DxCheckBoxModule,
  DxTextBoxModule,
  DxValidatorModule
} from 'devextreme-angular';
import { ValidationRule } from 'devextreme-angular/common';

@Component({
  selector: 'form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['form-checkbox.component.scss'],
})
export class FormCheckboxComponent {
  @Input() isEditing = false;

  @Input() text: string|undefined;

  @Input() label = '';

  @Input() mask: string = "";

  @Input() icon: string = "folder";

  @Input() validators: ValidationRule[] = [{ type: 'required' }];

  @Input() value!: boolean;

  @Output() valueChange = new EventEmitter<string>();

  valueChanged(e:any) {
    this.valueChange.emit(e.value);
  }

}

@NgModule({
  imports: [
    DxButtonModule,
    DxCheckBoxModule, 
    DxTextBoxModule,
    DxValidatorModule,
    CommonModule,
  ],
  declarations: [FormCheckboxComponent],
  exports: [FormCheckboxComponent],
})
export class FormCheckboxModule { }