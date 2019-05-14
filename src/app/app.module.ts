import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {ClientesListComponent} from './components/clientes/clientes-list/clientes-list.component';
import {ProdutosListComponent} from './components/produtos/produtos-list/produtos-list.component';
import {PedidosListComponent} from './components/pedidos/pedidos-list/pedidos-list.component';
import {LayoutModule} from '@angular/cdk/layout';

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
    MatListModule,
    LayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
