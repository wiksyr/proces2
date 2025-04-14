import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSkanerComponent } from './ngx-skaner.component';

describe('NgxSkanerComponent', () => {
  let component: NgxSkanerComponent;
  let fixture: ComponentFixture<NgxSkanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSkanerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxSkanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
