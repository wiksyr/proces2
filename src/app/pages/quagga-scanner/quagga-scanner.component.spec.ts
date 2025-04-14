import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaggaScannerComponent } from './quagga-scanner.component';

describe('QuaggaScannerComponent', () => {
  let component: QuaggaScannerComponent;
  let fixture: ComponentFixture<QuaggaScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuaggaScannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuaggaScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
