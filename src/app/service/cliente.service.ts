import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../domain/cliente';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = `${environment.apiUri}/clientes`;

  constructor(private http: HttpClient) {
  }

  buscar(id: number) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  buscarTodos(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente);
  }

  excluir(cliente: Cliente) {
    return this.http.delete<Cliente>(`${this.url}/${cliente.id}`);
  }
}
