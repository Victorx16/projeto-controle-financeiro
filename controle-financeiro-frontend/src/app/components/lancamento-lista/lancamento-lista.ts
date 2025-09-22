import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lancamento, LancamentoService } from '../../services/lancamento';

@Component({
  selector: 'app-lancamento-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lancamento-lista.html',
  styleUrl: './lancamento-lista.css'
})
export class LancamentoListaComponent implements OnInit {

  lancamentos: Lancamento[] = [];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit(): void {
    this.lancamentoService.listar()
      .subscribe(dados => {
        this.lancamentos = dados;
      });
  }
}