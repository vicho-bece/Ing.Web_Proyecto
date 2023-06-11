import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosBusConductorComponent } from './datos-bus-conductor.component';

describe('DatosBusConductorComponent', () => {
  let component: DatosBusConductorComponent;
  let fixture: ComponentFixture<DatosBusConductorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosBusConductorComponent]
    });
    fixture = TestBed.createComponent(DatosBusConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
