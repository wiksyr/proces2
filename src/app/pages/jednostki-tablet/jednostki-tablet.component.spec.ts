import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednostkiTabletComponent } from './jednostki-tablet.component';

describe('JednostkiTabletComponent', () => {
  let component: JednostkiTabletComponent;
  let fixture: ComponentFixture<JednostkiTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JednostkiTabletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednostkiTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
