import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { FormasPagtoComponent } from './components/cadastros/formas-pagto/formas-pagto.component';
import { ClienteEstadoComponent } from './components/cadastros/cliente-estado/cliente-estado.component';
import { ClientesComponent } from './components/cadastros/clientes/clientes.component';
import { BoletosComponent } from './components/financeiro/boletos/boletos.component';
import { MenulateralComponent } from './components/menu/menulateral/menulateral.component';
import { MenuheaderComponent } from './components/menu/menuheader/menuheader.component';
import { FormasPagtodetalheComponent } from './components/cadastros/formas-pagto/formas-pagtodetalhe/formas-pagtodetalhe.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { ButtomPlusComponent } from './share/buttom-plus/buttom-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    FormasPagtoComponent,
    ClienteEstadoComponent,
    ClientesComponent,
    BoletosComponent,
    MenulateralComponent,
    MenuheaderComponent,
    FormasPagtodetalheComponent,
    SpinnerComponent,
    ButtomPlusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
