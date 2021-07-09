import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPQRSComponent } from './buscar-pqrs.component';

describe('BuscarPQRSComponent', () => {
  let component: BuscarPQRSComponent;
  let fixture: ComponentFixture<BuscarPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPQRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
