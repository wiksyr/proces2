import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-czytnik-kodow',
  templateUrl: './czytnik-kodow.component.html',
  styleUrl: './czytnik-kodow.component.css',
  standalone: false
})
export class CzytnikKodowComponent {
  barcodeResult: string | null = null;
  
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
    BarcodeFormat.UPC_A, 
    BarcodeFormat.UPC_E, 
    BarcodeFormat.UPC_EAN_EXTENSION
  ];

  // This method is triggered when a barcode is successfully scanned
  handleScanSuccess(result: string) {
    this.barcodeResult = result;
    console.log('Scanned barcode:', result);
  }

  // This method is triggered if an error occurs during the scan
  handleScanError(error: any) {
    console.error('Scan error:', error);
  }
}
