import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Cliente} from '../../../models/cliente';
import {ClienteService} from '../../../service/cliente.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  dataSource = new MatTableDataSource<Cliente>();

  produtosLength: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() outputCliente: EventEmitter<Cliente> = new EventEmitter();

  constructor(private service: ClienteService, private route: ActivatedRoute) {
  }

  buscarTodos() {
    this.service.buscarTodos().subscribe(
      (data) => {
        this.dataSource = new MatTableDataSource<Cliente>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  ngOnInit() {
    this.buscarTodos();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(obj: Cliente) {
    this.outputCliente.emit(Object.assign({}, obj));
  }

  onDelete(obj: Cliente) {
    this.service.excluir(obj).subscribe(
      () => this.buscarTodos(),
      (error) => console.log('Erro ao excluir', error, obj)
    );
  }
}
