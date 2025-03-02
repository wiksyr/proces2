import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodzajeProductowComponent } from './rodzaje-productow.component';

describe('RodzajeProductowComponent', () => {
  let component: RodzajeProductowComponent;
  let fixture: ComponentFixture<RodzajeProductowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RodzajeProductowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RodzajeProductowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
