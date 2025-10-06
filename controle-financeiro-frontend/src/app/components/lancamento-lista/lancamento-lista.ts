import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lancamento, LancamentoService } from '../../services/lancamento';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lancamento-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lancamento-lista.html',
  styleUrl: './lancamento-lista.css'
})
export class LancamentoListaComponent implements OnInit {
  lancamentos: Lancamento[] = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.carregarLancamentos();

    this.lancamentoService.lancamentoAtualizado$.subscribe(() => {
      this.carregarLancamentos();
    });
  }

  carregarLancamentos(): void {
    this.lancamentoService.listar().subscribe(dados => {
      this.lancamentos = dados;
    });
  }
}