import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { PedidosListComponent } from './pedidos/pedidos-list/pedidos-list.component';

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
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
