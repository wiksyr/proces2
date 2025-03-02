import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednostkiBiezaceComponent } from './jednostki-biezace.component';

describe('JednostkiBiezaceComponent', () => {
  let component: JednostkiBiezaceComponent;
  let fixture: ComponentFixture<JednostkiBiezaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JednostkiBiezaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednostkiBiezaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
