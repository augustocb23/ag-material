import {Component, OnInit, ViewChild} from '@angular/core';
import {Produto} from '../../../models/produto';
import {ProdutosDataSource} from './produtosDataSource';
import {ProdutoService} from '../../../service/produto.service';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource: ProdutosDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: ProdutoService) {
  }

  onEdit(produto: Produto) {
  }

  onDelete(produto: Produto) {
  }

  ngOnInit() {
    this.dataSource = new ProdutosDataSource(this.service);
    this.dataSource.load('', 'asc', 'id', '0', '10');
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

}
