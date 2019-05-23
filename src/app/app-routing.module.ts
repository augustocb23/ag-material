import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProdutosComponent} from './components/produtos/produtos.component';
import {PedidosComponent} from './components/pedidos/pedidos.component';
import {ClientesComponent} from './components/clientes/clientes.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'pedidos', component: PedidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
