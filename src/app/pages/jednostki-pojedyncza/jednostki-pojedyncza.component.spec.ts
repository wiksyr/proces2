import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JednostkiFormComponent } from './jednostki-pojedyncza.component';

describe('JednostkiFormComponent', () => {
  let component: JednostkiFormComponent;
  let fixture: ComponentFixture<JednostkiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JednostkiFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JednostkiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
