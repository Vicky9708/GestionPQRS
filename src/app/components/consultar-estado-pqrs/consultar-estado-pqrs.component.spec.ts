import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarEstadoPQRSComponent } from './consultar-estado-pqrs.component';

describe('ConsultarEstadoPQRSComponent', () => {
  let component: ConsultarEstadoPQRSComponent;
  let fixture: ComponentFixture<ConsultarEstadoPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarEstadoPQRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarEstadoPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
