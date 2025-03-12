import { Component } from '@angular/core';
import { CameraCaptureModalService } from '../../services/cameraCaptureModalService';

@Component({
  selector: 'app-camera-capture-modal',
  templateUrl: './camera-capture-modal.component.html',
  styleUrl: './camera-capture-modal.component.scss',
  standalone: false
})
export class CameraCaptureModalComponent {
  inputData: string = '';

  constructor(private service: CameraCaptureModalService) {}

  readInsertedData(data: string) { 
    this.inputData = data; 
    this.closeModal(); 
  }

  closeModal() {
    this.service.setModalData(this.inputData); // Pass the data back to the parent
  }
}
