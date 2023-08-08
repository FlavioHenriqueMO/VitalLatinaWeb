import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormasPagtoComponent } from './components/cadastros/formas-pagto/formas-pagto.component';
import { ClienteEstadoComponent } from './components/cadastros/cliente-estado/cliente-estado.component';
import { ClientesComponent } from './components/cadastros/clientes/clientes.component';
import { BoletosComponent } from './components/financeiro/boletos/boletos.component';

const routes: Routes = [
  { path:'frmPagto', component: FormasPagtoComponent},
  { path:'estadoCliente', component: ClienteEstadoComponent},
  { path: 'cliente', component: ClientesComponent},
  { path:'boleto', component: BoletosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
