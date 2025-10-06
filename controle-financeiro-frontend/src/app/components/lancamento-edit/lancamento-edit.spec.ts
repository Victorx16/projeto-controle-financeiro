import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoEdit } from './lancamento-edit';

describe('LancamentoEdit', () => {
  let component: LancamentoEdit;
  let fixture: ComponentFixture<LancamentoEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentoEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentoEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
