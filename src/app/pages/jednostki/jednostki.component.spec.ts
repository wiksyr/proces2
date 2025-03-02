import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednostkiComponent } from './jednostki.component';

describe('JednostkiComponent', () => {
  let component: JednostkiComponent;
  let fixture: ComponentFixture<JednostkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JednostkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednostkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
