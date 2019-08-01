import {Produto} from '../../../models/produto';
import {DataSource} from '@angular/cdk/table';
import {CollectionViewer} from '@angular/cdk/collections';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProdutoService} from '../../../service/produto.service';

export class ProdutosDataSource implements DataSource<Produto> {
  private produtosSubject = new BehaviorSubject<Produto[]>([]);

  constructor(private service: ProdutoService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<Produto[] | ReadonlyArray<Produto>> {
    return this.produtosSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.produtosSubject.complete();
  }

  load(filter, sortOrder, sortColumn, pageNumber, pageSize) {

    this.service.buscarPagina(filter, sortOrder, sortColumn, pageNumber, pageSize)
      .subscribe(produtos => this.produtosSubject.next(produtos));
  }
}
