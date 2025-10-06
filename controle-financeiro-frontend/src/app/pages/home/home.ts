import { Component } from '@angular/core';
import { LancamentoFormComponent } from '../../components/lancamento-form/lancamento-form';
import { LancamentoListaComponent } from '../../components/lancamento-lista/lancamento-lista';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LancamentoFormComponent, LancamentoListaComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent { }