import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  private _lancamentoAtualizado$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get lancamentoAtualizado$() {
    return this._lancamentoAtualizado$.asObservable();
  }

  listar(): Observable<Lancamento[]> {
    return this.http.get<Lancamento[]>(this.apiUrl);
  }

  salvar(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.post<Lancamento>(this.apiUrl, lancamento).pipe(
      tap(() => {
        this._lancamentoAtualizado$.next();
      })
    );
  }

  buscarPorId(id: number): Observable<Lancamento> {
    return this.http.get<Lancamento>(`${this.apiUrl}/${id}`)
  }

  atualizar(lancamento: Lancamento): Observable<Lancamento> {
    return this.http.put<Lancamento>(`${this.apiUrl}/${lancamento.id}`, lancamento).pipe(
      tap(() => {
        this._lancamentoAtualizado$.next();
      })
    );
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        
        this._lancamentoAtualizado$.next();
      })
    );
  }
}