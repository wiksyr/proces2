// modal-data.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CzytnikKodowModalService {
  private modalData = new Subject<any>();
  modalData$ = this.modalData.asObservable();

  setModalData(data: any) {
    this.modalData.next(data);
  }
}
