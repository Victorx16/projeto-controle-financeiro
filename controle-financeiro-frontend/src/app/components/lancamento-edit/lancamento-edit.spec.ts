import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoEditComponent } from './lancamento-edit';

describe('LancamentoEdit', () => {
  let component: LancamentoEditComponent;
  let fixture: ComponentFixture<LancamentoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LancamentoEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
