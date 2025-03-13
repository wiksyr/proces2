import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanditSkanerComponent } from './scandit-skaner.component';

describe('ScanditSkanerComponent', () => {
  let component: ScanditSkanerComponent;
  let fixture: ComponentFixture<ScanditSkanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScanditSkanerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScanditSkanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
