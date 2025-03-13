import { Component, OnDestroy, OnInit } from '@angular/core';

import {
  configure,
  DataCaptureView,
  Camera,
  DataCaptureContext,
  FrameSourceState
} from "@scandit/web-datacapture-core";

import {
  barcodeCaptureLoader,
  BarcodeCaptureSettings,
  BarcodeCapture,
  Symbology
} from "@scandit/web-datacapture-barcode";

@Component({
  selector: 'app-scandit-skaner',
  templateUrl: './scandit-skaner.component.html',
  styleUrl: './scandit-skaner.component.css',
  standalone: false
})
export class ScanditSkanerComponent implements OnInit, OnDestroy {
  scannedBarcode: string = '';
  barcodeCapture: BarcodeCapture|any; 
  scanner: any;

  constructor() { }

  async ngOnInit() {
    // Initialize the barcode scanner when the component loads
    await this.setupBarcodeScanner();
  }

  async setupBarcodeScanner() {
    let view = new DataCaptureView();
    let htmlSkanerView: HTMLElement = document.getElementById("scanner-container") ?? new HTMLElement();
        view.connectToElement(htmlSkanerView);
        view.showProgressBar();
        
        await configure({
            licenseKey: "AlwVhzoHHG9gFCB1tvY1kCsgS+avHh+YQD/wQsgpyLQEf40on1h1IrElWOCCfS5V40v6fh5wvV/+QGMhSEF25Q5sXlzvek84ryAhy8ks6zjZaQG8vCqCPMUIy/EmMjJ82x6NqkRMKdSydXKqQh/qD9lnKZK6JLxTdQzYYD8WCSGrWxhDiV2wZktAmcuRLQHkWW2+qUoBqsRtdlo5dBqtQPJZ0N03J9dyQmkFqAkg2UPwATSlazQuT0h9tWxRQPOe0ygjytYHcPBkBOyZVB+y1lIfw7mLca0+VQEh3CEqp28bDuP0ND6ih/sHKv0NBBtaxRNR1xI1lekVYvO78DQQhZgzmCiNJCwXdHyl1zteK2UfUf50mnoqLeE11KC9TaI8S0ET1zdPTSNtWilW8BFGWtF3x7vcRveQbm5D6b0EzYBUY8Z2lg9TiRtiECdTTR0XXnms/QN+s3m/XDeCoTnVRZBQApeSQtEtel4wiYQUtITWWkbu73xj6OEDFqQ5DXkquFjFKjZg7OlkU4n+FQUxDI5HKZkbX2M0rGpcPDJA1x7GKWZq3W9Uij1w1GPAdFcYikDxT8Z147yLf2W4bxFSh0RwQmvCKmBz0mnFGEdJBkDMReDPVTCHfGMPVTUEUXAzZ1qj8Tp2m2MKAXqGs0RqQJh+hAnqPA5nfVN9dckhLaZwUTuK92h6usZ5ZkTSKcsVjVx0AOst3psHb9cDgCtnE6hOy4keVcY+JBn9MChaCeCOSXFobw2jD2gMyCFhqjBiRdnL6WdmB0JSmI24mj5XZUnkd2Zn7ABdGwIHv/8wxImAbxGv27EtfGgScoX1tzVqx7NaUopUvG+bkHgi9lMYN5eLWSHkWx8DwFTP3s5T3zJW8X5WkWj79UAwAxeGp1Vi7hsLavpBx4Ecmd1Aqn/OR0stvYfjnQpjyRVd9IQxZeJ8s7HC5XiNPVvuJPz5H7aBo9+zbCyunpjkMNmuHUxwCb9zUVAtvfJsEfeyJLssTu+0Kt4Ld1IyGcM5L2vS3Y+lyNRfuwRzc9sNE0SIfF/DddTddKMGrK5R+16o+j9FhmkwBueaJUOckBYgHZ4YmbWa6RKESG9ktxsxIyf6B2FEPaLS3YRpevPaEqOYDoMqt4LuZn2y5viWS0TpG+C17LDFPxSyUWpFLnGLNeC7+lQ4XUMVqADJSRngM4dpP8zBWIEQyskyuKXqaFso6JAn4kSXaT0re0Io/OJXhlcziid+rO4wPIQdZ50jH/fTJSXGG4qKQXHYbg31+hg3RyhNi5K+XqgKwfusKwZXbdO1rvs+Ww2lBDFtxgstrv2xIGWKw7+v+K7jAybgWZmu0i/vwABqW5hfsL07aq0bKeVDoF4tfzuBbBXsyt2GtOPZNDDiBDIdAOGqJvaVXB9Sueu5bSAY/tvMcsjsGbjDYczIPpPCvmDjPL0rHvLyKt2uog==",
            libraryLocation:
                    "https://cdn.jsdelivr.net/npm/@scandit/web-datacapture-barcode@7.0.0/sdc-lib/",
            moduleLoaders: [barcodeCaptureLoader()],
        });
        view.hideProgressBar();

        const camera = Camera.default;

        // Depending on the use case further camera settings adjustments can be made here.
        const context = await DataCaptureContext.create();
        await view.setContext(context);

        const cameraSettings = BarcodeCapture.recommendedCameraSettings;
        await camera.applySettings(cameraSettings);
        await context.setFrameSource(camera);

        await context.setFrameSource(camera);
        await context.frameSource?.switchToDesiredState(FrameSourceState.On);

        const settings = new BarcodeCaptureSettings();
        settings.enableSymbologies([Symbology.Code128, Symbology.QR, Symbology.EAN13UPCA]);

        this.barcodeCapture = await BarcodeCapture.forContext(
                context,
                settings
        );

        await this.barcodeCapture.setEnabled(true);

        const listener = {
          didScan: (barcodeCapture:any, session:any) => {
            const recognizedBarcodes = session.newlyRecognizedBarcode;
            this.scannedBarcode = recognizedBarcodes._data;
            console.log(recognizedBarcodes); 
            // Do something with the barcodes
          },
        };

        this.barcodeCapture.addListener(listener); 
  }
  

  async stopScanning() {
        await this.barcodeCapture.setEnabled(false);
  }

  async ngOnDestroy() {
    await this.stopScanning(); 
  }
}