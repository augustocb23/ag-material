import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule, MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import {CdkTableModule} from '@angular/cdk/table';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ClientesListComponent} from './components/clientes/clientes-list/clientes-list.component';
import {ProdutosListComponent} from './components/produtos/produtos-list/produtos-list.component';
import {PedidosListComponent} from './components/pedidos/pedidos-list/pedidos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesListComponent,
    ProdutosListComponent,
    PedidosListComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
