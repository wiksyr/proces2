import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library';

@Component({
  selector: 'app-czytnik-kodow',
  templateUrl: './czytnik-kodow.component.html',
  styleUrl: './czytnik-kodow.component.css',
  standalone: false
})
export class CzytnikKodowComponent implements OnInit, OnDestroy {
  private codeReader: BrowserMultiFormatReader;
  public hasDevices = false;
  public videoInputDevices: MediaDeviceInfo[] = [];
  public selectedDeviceId: string|any;
  @Output() scanResult: EventEmitter<string> = new EventEmitter<string>();
  public scannedValue: string|any; 
  public videoDevices: MediaDeviceInfo[] = [];
  public videoStream: MediaStream | null = null;

  constructor() {
    this.codeReader = new BrowserMultiFormatReader();
  }

  ngOnInit() {

    this.codeReader
      .listVideoInputDevices()
      .then((videoInputDevices: MediaDeviceInfo[]) => {
        this.hasDevices = videoInputDevices.length > 0;
        this.videoInputDevices = videoInputDevices;
        this.selectedDeviceId = videoInputDevices[0]?.deviceId;
        if(this.videoInputDevices.length > 1) { 
          this.selectedDeviceId = videoInputDevices[1]?.deviceId;
        }

        this.startScanner(); 
      })
      .catch((err) => {
        console.error('Error listing video input devices:', err);
      });
  }

  startScanner(): void {
    
    this.stopScanner(); 
    this.requestCameraAccess(); 
    if (this.selectedDeviceId) {
      this.codeReader
        .decodeFromVideoDevice(this.selectedDeviceId, 'video', (result, error) => {
          if (result) {
            this.scanResult.emit(result.getText());
            this.scannedValue = result.getText(); 
            this.stopScanner(); 
          }
          if (error) {
            //console.error('Error scanning:', error);
          }
        })
        .catch((err) => {
          console.error('Error starting scanner:', err);
        });
    }
  }

  stopScanner(): void{
    this.codeReader.reset();
    this.stopCamera(); 
  }

  ngOnDestroy(): void {
    this.stopScanner(); 
  }

  requestCameraAccess() { 
    if (this.selectedDeviceId) {
      const constraints = {
        video: { 
          deviceId: { exact: this.selectedDeviceId } 
        }
      };
    
      
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      this.videoStream = stream;
      const videoElement = document.querySelector('video');
      if (videoElement) {
        videoElement.srcObject = stream;
      }
    })
    .catch(err => {
      console.error('Error accessing camera:', err);
    });
   }
  }
  
  stopCamera(): void {
    if (this.videoStream) {
      // Stop each track (audio/video) in the media stream
      this.videoStream.getTracks().forEach(track => track.stop());
      this.videoStream = null;  // Clear the media stream
    }
  }
}