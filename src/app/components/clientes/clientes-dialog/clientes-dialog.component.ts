import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import {Cliente} from '../../../models/cliente';
import {ClienteService} from '../../../service/cliente.service';

@Component({
  selector: 'app-clientes-dialog',
  templateUrl: './clientes-dialog.component.html',
  styleUrls: ['./clientes-dialog.component.css']
})
export class ClientesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ClientesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public cliente: Cliente,
    private service: ClienteService) {
    if (cliente == null) {
      this.cliente = {} as Cliente;
    }
  }

  onSalvar(): void {
    if (this.cliente.id) {
      this.service.editar(this.cliente).subscribe(
        () => {
          console.log('Cliente alterado', this.cliente);
          this.dialogRef.close(true);
        },
        () => {
          console.error('Erro ao editar cliente ', this.cliente);
        }
      );
    } else {
      this.service.criar(this.cliente).subscribe(
        () => {
          console.log('Cliente cadastrado', this.cliente);
          this.dialogRef.close(true);
        },
        () => {
          console.error('Erro ao criar cliente ', this.cliente);
        }
      );
    }
  }
}
