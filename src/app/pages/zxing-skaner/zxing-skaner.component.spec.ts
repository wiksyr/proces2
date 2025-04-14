import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZxingSkanerComponent } from './zxing-skaner.component';

describe('ZxingSkanerComponent', () => {
  let component: ZxingSkanerComponent;
  let fixture: ComponentFixture<ZxingSkanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZxingSkanerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZxingSkanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
