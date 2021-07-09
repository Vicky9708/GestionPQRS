import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPQRSComponent } from './gestionar-pqrs.component';

describe('GestionarPQRSComponent', () => {
  let component: GestionarPQRSComponent;
  let fixture: ComponentFixture<GestionarPQRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarPQRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
