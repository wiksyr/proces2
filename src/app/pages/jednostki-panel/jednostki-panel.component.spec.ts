import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednostkiPanelComponent } from './jednostki-panel.component';

describe('JednostkiPanelComponent', () => {
  let component: JednostkiPanelComponent;
  let fixture: ComponentFixture<JednostkiPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JednostkiPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednostkiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
