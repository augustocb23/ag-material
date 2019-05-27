import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Cliente} from '../../../domain/cliente';
import {ClienteService} from '../../../service/cliente.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome'];
  dataSource = new MatTableDataSource<Cliente>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Output() outputCliente: EventEmitter<Cliente> = new EventEmitter();

  constructor(private service: ClienteService) {
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

  onRowClick(obj: Cliente) {
    this.outputCliente.emit(Object.assign({}, obj));
  }
}
