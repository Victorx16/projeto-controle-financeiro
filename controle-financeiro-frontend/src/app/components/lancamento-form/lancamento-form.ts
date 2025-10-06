import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Lancamento, LancamentoService, TipoLancamento } from '../../services/lancamento';

@Component({
  selector: 'app-lancamento-form',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './lancamento-form.html',
  styleUrl: './lancamento-form.css'
})
export class LancamentoFormComponent {
  novoLancamento: Lancamento = {
    descricao: '',
    valor: 0,
    data: '',
    tipo: TipoLancamento.DESPESA
  };

  constructor(private lancamentoService: LancamentoService) { }

  salvar() {
    this.lancamentoService.salvar(this.novoLancamento).subscribe(() => {
      console.log('Lançamento salvo, limpando o formulário...');
      // Limpa o formulário após o sucesso
      this.novoLancamento = {
        descricao: '',
        valor: 0,
        data: '',
        tipo: TipoLancamento.DESPESA
      };
    });
  }
}