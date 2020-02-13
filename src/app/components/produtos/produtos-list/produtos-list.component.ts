import {Component, OnInit, ViewChild} from '@angular/core';
import {Produto} from '../../../models/produto';
import {ProdutosDataSource} from './produtosDataSource';
import {ProdutoService} from '../../../service/produto.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource: ProdutosDataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

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
