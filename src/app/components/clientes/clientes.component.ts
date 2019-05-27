import {Component, ViewChild} from '@angular/core';
import {Cliente} from '../../domain/cliente';
import {ClientesListComponent} from './clientes-list/clientes-list.component';
import {MatDialog} from '@angular/material';
import {ClientesDialogComponent} from './clientes-dialog/clientes-dialog.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  @ViewChild(ClientesListComponent) lista: ClientesListComponent;

  constructor(public dialog: MatDialog) {
  }

  openDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(ClientesDialogComponent, {
      width: '250px',
      data: cliente
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.lista.buscarTodos();
      }
    });
  }

  editarCliente(cliente: Cliente) {
    this.openDialog(cliente);
  }
}
