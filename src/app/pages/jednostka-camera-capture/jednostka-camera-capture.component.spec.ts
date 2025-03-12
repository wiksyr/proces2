import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednostkaCameraCaptureComponent } from './jednostka-camera-capture.component';

describe('JednostkaCameraCaptureComponent', () => {
  let component: JednostkaCameraCaptureComponent;
  let fixture: ComponentFixture<JednostkaCameraCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JednostkaCameraCaptureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednostkaCameraCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
