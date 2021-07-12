import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoConsultaPQRSComponent } from './resultado-consulta-pqrs.component';

describe('ResultadoConsultaPQRSComponent', () => {
  let component: ResultadoConsultaPQRSComponent;
  let fixture: ComponentFixture<ResultadoConsultaPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoConsultaPQRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoConsultaPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
