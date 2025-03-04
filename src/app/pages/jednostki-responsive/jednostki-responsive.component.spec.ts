import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednostkiResponsiveComponent } from './jednostki-responsive.component';

describe('JednostkiResponsiveComponent', () => {
  let component: JednostkiResponsiveComponent;
  let fixture: ComponentFixture<JednostkiResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JednostkiResponsiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednostkiResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
