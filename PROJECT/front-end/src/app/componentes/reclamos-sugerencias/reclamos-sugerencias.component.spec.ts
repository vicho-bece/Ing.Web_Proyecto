import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamosSugerenciasComponent } from './reclamos-sugerencias.component';

describe('ReclamosSugerenciasComponent', () => {
  let component: ReclamosSugerenciasComponent;
  let fixture: ComponentFixture<ReclamosSugerenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamosSugerenciasComponent]
    });
    fixture = TestBed.createComponent(ReclamosSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
