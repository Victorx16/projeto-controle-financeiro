import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Lancamento, LancamentoService } from '../../services/lancamento';

@Component({
  selector: 'app-lancamento-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lancamento-edit.html',
  styleUrl: './lancamento-edit.css'
})
export class LancamentoEditComponent implements OnInit {
  lancamento: Lancamento | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private lancamentoService: LancamentoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.lancamentoService.buscarPorId(Number(id)).subscribe(dados => {
        this.lancamento = dados;
      });
    }
  }

  salvarEdicao(): void {
    if (this.lancamento) {
      this.lancamentoService.atualizar(this.lancamento).subscribe(() => {
        console.log('Lançamento atualizado com sucesso!');
        this.router.navigate(['/']); 
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}