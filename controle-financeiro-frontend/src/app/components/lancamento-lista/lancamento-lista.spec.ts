import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoListaComponent } from './lancamento-lista';

describe('LancamentoLista', () => {
  let component: LancamentoListaComponent;
  let fixture: ComponentFixture<LancamentoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
