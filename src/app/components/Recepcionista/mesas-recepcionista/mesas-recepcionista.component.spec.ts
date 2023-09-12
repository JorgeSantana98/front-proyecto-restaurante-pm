import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasRecepcionistaComponent } from './mesas-recepcionista.component';

describe('MesasRecepcionistaComponent', () => {
  let component: MesasRecepcionistaComponent;
  let fixture: ComponentFixture<MesasRecepcionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesasRecepcionistaComponent]
    });
    fixture = TestBed.createComponent(MesasRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
