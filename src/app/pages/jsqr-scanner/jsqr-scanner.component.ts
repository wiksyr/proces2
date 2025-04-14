import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import jsQR from 'jsqr';

@Component({
  selector: 'app-jsqr-scanner',
  templateUrl: './jsqr-scanner.component.html',
  styleUrl: './jsqr-scanner.component.css',
  standalone: false
})
export class JsqrScannerComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('videoElement') videoElementRef!: ElementRef;
  videoElement!: HTMLVideoElement;
  canvasElement!: HTMLCanvasElement;
  canvasContext!: CanvasRenderingContext2D;
  stream!: MediaStream;
  devices: MediaDeviceInfo[] = [];
  selectedDeviceId: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.setupCamera(); 
  }

  ngOnDestroy(): void {
    if (this.stream) {
      // Stop all tracks of the media stream when the component is destroyed
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  setupCamera(): void {
    this.getDeviceId(); 
    
    const constraints = {
      video: {
        deviceId: { exact: this.selectedDeviceId }
      }
    };
    
    this.videoElement = this.videoElementRef.nativeElement;
    this.canvasElement = document.createElement('canvas');
    this.canvasContext = this.canvasElement.getContext('2d')!;

    // Get user media (camera)
    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream: MediaStream) => {
        this.stream = stream;
        this.videoElement.srcObject = stream;
        this.videoElement.setAttribute('playsinline', 'true'); // Required for iOS
        this.videoElement.play();
        this.scanQRCode();
      })
      .catch(err => {
        console.error('Error accessing camera: ', err);
      });
  }

  scanQRCode(): void {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
      this.canvasContext.drawImage(this.videoElement, 0, 0, this.canvasElement.width, this.canvasElement.height);

      const imageData = this.canvasContext.getImageData(0, 0, this.canvasElement.width, this.canvasElement.height);
      const code = jsQR(imageData.data, this.canvasElement.width, this.canvasElement.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
        console.log('QR Code detected: ', code.data); // Display QR code content
        alert(`QR Code detected: ${code.data}`);
      }
    }

    requestAnimationFrame(() => this.scanQRCode()); // Recursively call the function to keep scanning
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
