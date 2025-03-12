import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JednostkaCameraCaptureComponent } from './pages/jednostka-camera-capture/jednostka-camera-capture.component';
import { CameraCaptureModalComponent } from './pages/camera-capture-modal/camera-capture-modal.component';
import { DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [JednostkaCameraCaptureComponent, 
    CameraCaptureModalComponent
  ],  // Declare and export shared components
  imports: [CommonModule, 
    DxButtonModule
  ],
  exports: [JednostkaCameraCaptureComponent, 
    CameraCaptureModalComponent
  ]  // Export it for use in other modules
})
export class SharedModule { }
