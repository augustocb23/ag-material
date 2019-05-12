import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientesListComponent} from './clientes/clientes-list/clientes-list.component';
import {ProdutosListComponent} from './produtos/produtos-list/produtos-list.component';
import {PedidosListComponent} from './pedidos/pedidos-list/pedidos-list.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesListComponent},
  {path: 'produtos', component: ProdutosListComponent},
  {path: 'pedidos', component: PedidosListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
