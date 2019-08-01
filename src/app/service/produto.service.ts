import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Produto} from '../models/produto';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url = `${environment.apiUri}/produtos`;

  constructor(private http: HttpClient) {
  }

  buscar(id: number) {
    return this.http.get<Produto>(`${this.url}/${id}`);
  }

  buscarPagina(filter = '', sortOrder = 'asc', sortColumn = 'id',
               pageNumber = 0, pageSize = 10): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.url, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('sortColumn', sortColumn)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map(res => res['payload'])
    );
  }

  criar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }

  editar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.url}/${produto.id}`, produto);
  }

  excluir(produto: Produto) {
    return this.http.delete<Produto>(`${this.url}/${produto.id}`);
  }
}
