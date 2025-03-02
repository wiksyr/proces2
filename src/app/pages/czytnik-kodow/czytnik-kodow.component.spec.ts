import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzytnikKodowComponent } from './czytnik-kodow.component';

describe('CzytnikKodowComponent', () => {
  let component: CzytnikKodowComponent;
  let fixture: ComponentFixture<CzytnikKodowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CzytnikKodowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CzytnikKodowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
