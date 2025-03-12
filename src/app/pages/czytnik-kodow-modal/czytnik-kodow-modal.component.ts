import { Component } from '@angular/core';
import { CzytnikKodowModalService } from '../../services/czytnikKodowModalService';

@Component({
  selector: 'app-czytnik-kodow-modal',
  templateUrl: './czytnik-kodow-modal.component.html',
  styleUrl: './czytnik-kodow-modal.component.scss',
  standalone: false
})
export class CzytnikKodowModalComponent {
  inputData: string = '';

  constructor(private service: CzytnikKodowModalService) {}

  readInsertedData(data: string) { 
    this.inputData = data; 
    this.closeModal(); 
  }

  closeModal() {
    this.service.setModalData(this.inputData); // Pass the data back to the parent
  }
}
