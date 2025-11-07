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

  excluir(id: number): void {

    if (confirm('Tem certeza que deseja excluir este lançamento?')) {
      this.lancamentoService.excluir(id).subscribe({
        next: () => {
          console.log('Lançamento excluído com sucesso!');
        },
        error: (erro) => {
          console.error('ERRO AO TENTAR EXCLUIR:', erro);
          alert('Não foi possível excluir o lançamento. Verifique o console para mais detalhes.');
        }
      });
    }
  }
}