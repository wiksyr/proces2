import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsqrScannerComponent } from './jsqr-scanner.component';

describe('JsqrScannerComponent', () => {
  let component: JsqrScannerComponent;
  let fixture: ComponentFixture<JsqrScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsqrScannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsqrScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
