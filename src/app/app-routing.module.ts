import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProdutosListComponent} from './components/produtos/produtos-list/produtos-list.component';
import {PedidosListComponent} from './components/pedidos/pedidos-list/pedidos-list.component';
import {ClientesComponent} from './components/clientes/clientes.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'produtos', component: ProdutosListComponent},
  {path: 'pedidos', component: PedidosListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
