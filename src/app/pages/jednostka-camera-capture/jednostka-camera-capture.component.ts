import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-jednostka-camera-capture',
  templateUrl: './jednostka-camera-capture.component.html',
  styleUrl: './jednostka-camera-capture.component.css',
  standalone: false
})
export class JednostkaCameraCaptureComponent implements OnInit, OnDestroy {
  @ViewChild('video', { static: true }) videoElement: ElementRef|any;
  @ViewChild('canvas', { static: true }) canvasElement: ElementRef|any;
  capturedImage: string | null = null;
  public videoStream: MediaStream | null = null;

  @Output() imageData: EventEmitter<string> = new EventEmitter<string>(); 

  constructor() { }

  ngOnInit(): void {
    this.startCamera();
  }

  ngOnDestroy(): void {
    this.stopCamera(); 
  }

  startCamera(): void {
    // Request camera access
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.videoStream = stream; 
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
      })
      .catch((error) => {
        console.error("Error accessing camera: ", error);
      });
  }

  captureImage = async () => {
    const canvas: HTMLCanvasElement = this.canvasElement.nativeElement;
    const video: HTMLVideoElement = this.videoElement.nativeElement;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the image to a data URL (base64 encoded)
      this.capturedImage = canvas.toDataURL('image/png');
      this.imageData.emit(this.capturedImage); 
    }
  }

  saveImage = async () => {
    if (this.capturedImage) {
      // Trigger download of the image (base64 data URL)
      const link = document.createElement('a');
      link.href = this.capturedImage;
      link.download = 'captured-photo.png';
      link.click();
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