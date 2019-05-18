import {Component, OnInit, ViewChild} from '@angular/core';
import {Cliente} from '../../domain/cliente';
import {ClientesListComponent} from './clientes-list/clientes-list.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  @ViewChild(ClientesListComponent) lista: ClientesListComponent;
  private cliente: Cliente = {id: 0, nome: 'XD'};

  constructor() {
  }

  ngOnInit() {
  }

  editarCliente(cliente: Cliente) {
    this.cliente = cliente;
    console.log(cliente);
  }
}
