import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Quagga from '../../../assets/customLibraries/quagga';
declare function sayHello(): void;
//import Quagga from 'quagga/type-definitions/quagga'

@Component({
  selector: 'app-quagga-scanner',
  templateUrl: './quagga-scanner.component.html',
  styleUrl: './quagga-scanner.component.css',
  standalone: false
})
export class QuaggaScannerComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('scanner') videoElementRef!: ElementRef;
  videoElement!: HTMLVideoElement;
  devices: MediaDeviceInfo[] = [];
  selectedDeviceId: string = '';

  constructor() {
    sayHello(); 
  }

  ngOnInit(): void {
    this.getDeviceId(); 
  }

  ngAfterViewChecked(): void {
    //this.setupCamera(); 
    // myStartQuagga(); 
  }

  ngOnDestroy(): void {
    Quagga.stop(); // Stop QuaggaJS when the component is destroyed
  }

  setupCamera(): void {
    this.getDeviceId(); 
    
    const constraints = {
      video: {
        deviceId: { exact: this.selectedDeviceId }
      }
    };
    
    this.videoElement = this.videoElementRef.nativeElement;

    // Get user media (camera)
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream: MediaStream) => {
        this.videoElement.srcObject = stream;
      })
      .catch(err => {
        console.error('Error accessing camera: ', err);
      });
  }

  startScanner(): void {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream', 
          constraints: {
            facingMode: 'environment', // Use the rear camera
            deviceId: this.selectedDeviceId
          },
        },
        decoder: {
          readers: ['code_128_reader','ean_reader', 'ean_8_reader', 'upc_reader', 'upc_e_reader'], // Enable EAN-13 and other barcode formats
        },
      },
      (err: any) => {
        if (err) {
          console.error('Quagga initialization error:', err);
          return;
        }
        console.log('Quagga initialized');
        Quagga.start();
      }
    );

    // Event listener for barcode detection
    Quagga.onDetected((result: any) => {
      console.log('Barcode detected:', result.codeResult.code);
      alert(`Barcode detected: ${result.codeResult.code}`);
    });
  }
  
  getDeviceId()
  {
    navigator.mediaDevices.enumerateDevices().then(devices => {
      this.devices = devices.filter(device => device.kind === 'videoinput');
      if (this.devices.length > 1) {
        // Set the second camera (you can modify this logic based on your needs)
        this.selectedDeviceId = this.devices[1].deviceId; 
      } else if (this.devices.length === 1) {
        // If only one device is available, use it
        this.selectedDeviceId = this.devices[0].deviceId;
      } else {
        console.error('No video devices found');
      }
    }).catch(error => {
      console.error('Error listing devices: ', error);
    });
  }
}
