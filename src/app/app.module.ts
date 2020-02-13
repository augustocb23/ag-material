import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {LayoutModule} from '@angular/cdk/layout';
import {CdkTableModule} from '@angular/cdk/table';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ClientesListComponent} from './components/clientes/clientes-list/clientes-list.component';
import {ProdutosListComponent} from './components/produtos/produtos-list/produtos-list.component';
import {PedidosListComponent} from './components/pedidos/pedidos-list/pedidos-list.component';
import {ClientesComponent} from './components/clientes/clientes.component';
import {PedidosComponent} from './components/pedidos/pedidos.component';
import {ProdutosComponent} from './components/produtos/produtos.component';
import { ClientesDialogComponent } from './components/clientes/clientes-dialog/clientes-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    ProdutosListComponent,
    PedidosListComponent,
    ClientesComponent,
    ProdutosComponent,
    PedidosComponent,
    ClientesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatIconModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    ClientesDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
