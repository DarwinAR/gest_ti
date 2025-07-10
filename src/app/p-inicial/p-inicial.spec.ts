import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PInicial } from './p-inicial';

describe('PInicial', () => {
  let component: PInicial;
  let fixture: ComponentFixture<PInicial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PInicial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PInicial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
