import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntascanScannerComponent } from './intascan-scanner.component';

describe('IntascanScannerComponent', () => {
  let component: IntascanScannerComponent;
  let fixture: ComponentFixture<IntascanScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntascanScannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntascanScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
