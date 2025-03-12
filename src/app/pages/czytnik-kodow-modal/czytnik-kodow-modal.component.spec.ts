import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzytnikKodowModalComponent } from './czytnik-kodow-modal.component';

describe('CzytnikKodowModalComponent', () => {
  let component: CzytnikKodowModalComponent;
  let fixture: ComponentFixture<CzytnikKodowModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CzytnikKodowModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CzytnikKodowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
