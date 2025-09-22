import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum TipoLancamento {
  RECEITA = 'RECEITA',
  DESPESA = 'DESPESA'
}

export interface Lancamento {
  id?: number;
  descricao: string;
  valor: number;
  data: string;
  tipo: TipoLancamento;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private apiUrl = 'http://localhost:8080/api/lancamentos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(this.apiUrl);
  }

  salvar(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.post<Lancamento>(this.apiUrl, lancamento);
  }
}