import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraCaptureModalComponent } from './camera-capture-modal.component';

describe('CameraCaptureModalComponent', () => {
  let component: CameraCaptureModalComponent;
  let fixture: ComponentFixture<CameraCaptureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameraCaptureModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CameraCaptureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
