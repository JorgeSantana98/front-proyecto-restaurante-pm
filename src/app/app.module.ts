import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './components/Administrar/Master/master.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlatomenuComponent } from './components/Administrar/platomenu/platomenu.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminClienteComponent } from './components/Administrar/admin-cliente/admin-cliente.component';
import { AdminEmpleadoComponent } from './components/Administrar/admin-empleado/admin-empleado.component';
import { AdminProveedorComponent } from './components/Administrar/admin-proveedor/admin-proveedor.component';
import { AdminIngredienteComponent } from './components/Administrar/admin-ingrediente/admin-ingrediente.component';
import { AdminExtraComponent } from './components/Administrar/admin-extra/admin-extra.component';
import { AdminIdentificacionComponent } from './components/Administrar/admin-identificacion/admin-identificacion.component';
import { MasterMeseroComponent } from './components/Mesero/components/master-mesero/master-mesero.component';
import { OrdenLlevarComponent } from './components/Mesero/components/orden-llevar/orden-llevar.component';
import { OrdenServirComponent } from './components/Mesero/components/orden-servir/orden-servir.component';
import { MasterRecepcionistaComponent } from './components/Recepcionista/master-recepcionista/master-recepcionista.component';
import { MesasRecepcionistaComponent } from './components/Recepcionista/mesas-recepcionista/mesas-recepcionista.component';
import { ReservacionesRecepcionistaComponent } from './components/Recepcionista/reservaciones-recepcionista/reservaciones-recepcionista.component';
import { ClienteComponent } from './components/Cliente/cliente.component';
import { ClienteNavbarComponent } from './components/Cliente/cliente-navbar.component';
import { VerReservasComponent } from './components/Cliente/ver-reservas/ver-reservas.component';
import { ContenidoInicioComponent } from './components/Cliente/contenido-inicio/contenido-inicio.component';
import { ReservacionClienteComponent } from './components/Cliente/reservacion-cliente/reservacion-cliente.component';
import { AboutComponent } from './components/Cliente/about/about.component';
import { MenuClienteComponent } from './components/Cliente/menu-cliente/menu-cliente.component';
import { ContactoComponent } from './components/Cliente/contacto/contacto.component';
import { MenuLunchComponent } from './components/Cliente/menu-lunch/menu-lunch.component';
import { MenuDinnerComponent } from './components/Cliente/menu-dinner/menu-dinner.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent, 
    MasterComponent, 
    PlatomenuComponent, 
    AdminClienteComponent, 
    AdminEmpleadoComponent, 
    AdminProveedorComponent, 
    AdminIngredienteComponent, 
    AdminIdentificacionComponent, 
    AdminExtraComponent, 
    MasterMeseroComponent, 
    OrdenLlevarComponent, 
    OrdenServirComponent, 
    MasterRecepcionistaComponent, 
    MesasRecepcionistaComponent, 
    ReservacionesRecepcionistaComponent,
    ClienteComponent,
    ClienteNavbarComponent,
    VerReservasComponent,
    ContenidoInicioComponent,
    ReservacionClienteComponent,
    AboutComponent,
    MenuClienteComponent,
    ContactoComponent,
    MenuLunchComponent,
    MenuDinnerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
