import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontrarBusComponent } from './encontrar-bus.component';

describe('EncontrarBusComponent', () => {
  let component: EncontrarBusComponent;
  let fixture: ComponentFixture<EncontrarBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncontrarBusComponent]
    });
    fixture = TestBed.createComponent(EncontrarBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
