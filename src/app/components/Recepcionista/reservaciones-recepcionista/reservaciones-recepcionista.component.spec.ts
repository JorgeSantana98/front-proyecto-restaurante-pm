import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesRecepcionistaComponent } from './reservaciones-recepcionista.component';

describe('ReservacionesRecepcionistaComponent', () => {
  let component: ReservacionesRecepcionistaComponent;
  let fixture: ComponentFixture<ReservacionesRecepcionistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservacionesRecepcionistaComponent]
    });
    fixture = TestBed.createComponent(ReservacionesRecepcionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
