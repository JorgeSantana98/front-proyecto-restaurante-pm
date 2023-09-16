import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatomenuComponent } from './components/Administrar/platomenu/platomenu.component';
import { DataTablesModule } from 'angular-datatables';
import { AdminClienteComponent } from './components/Administrar/admin-cliente/admin-cliente.component';
import { AdminEmpleadoComponent } from './components/Administrar/admin-empleado/admin-empleado.component';
import { AdminProveedorComponent } from './components/Administrar/admin-proveedor/admin-proveedor.component';
import { AdminIngredienteComponent } from './components/Administrar/admin-ingrediente/admin-ingrediente.component';
import { AdminIdentificacionComponent } from './components/Administrar/admin-identificacion/admin-identificacion.component';
import { AdminExtraComponent } from './components/Administrar/admin-extra/admin-extra.component';
import { OrdenLlevarComponent } from './components/Mesero/components/orden-llevar/orden-llevar.component';
import { OrdenServirComponent } from './components/Mesero/components/orden-servir/orden-servir.component';
import { MesasRecepcionistaComponent } from './components/Recepcionista/mesas-recepcionista/mesas-recepcionista.component';
import { ReservacionesRecepcionistaComponent } from './components/Recepcionista/reservaciones-recepcionista/reservaciones-recepcionista.component';
import { ClienteComponent } from './components/Cliente/cliente.component';
import { VerReservasComponent } from './components/Cliente/ver-reservas/ver-reservas.component';
import { ContenidoInicioComponent } from './components/Cliente/contenido-inicio/contenido-inicio.component';
import { ReservacionClienteComponent } from './components/Cliente/reservacion-cliente/reservacion-cliente.component';
import { AboutComponent } from './components/Cliente/about/about.component';
import { MenuClienteComponent } from './components/Cliente/menu-cliente/menu-cliente.component';
import { ContactoComponent } from './components/Cliente/contacto/contacto.component';
import { MenuLunchComponent } from './components/Cliente/menu-lunch/menu-lunch.component';
import { MenuDinnerComponent } from './components/Cliente/menu-dinner/menu-dinner.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'menu', component: PlatomenuComponent },
  { path: 'adminclientes', component: AdminClienteComponent },
  { path: 'adminempleado', component: AdminEmpleadoComponent },
  { path: 'adminproveedor', component: AdminProveedorComponent },
  { path: 'adminingrediente', component: AdminIngredienteComponent },
  { path: 'adminidentificador', component: AdminIdentificacionComponent },
  { path: 'adminextra', component: AdminExtraComponent },
  { path: 'meseroOrdenllevar', component: OrdenLlevarComponent },
  { path: 'meseroOrdenservir', component: OrdenServirComponent },
  { path: 'recepcionistareservaciones', component: ReservacionesRecepcionistaComponent },
  { path: 'recepcionistamesas', component: MesasRecepcionistaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClienteComponent, children: [
    { path: 'inicio', component: ContenidoInicioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'menu', component: MenuClienteComponent },
    { path: 'lunch', component: MenuLunchComponent },
    { path: 'dinner', component: MenuDinnerComponent },
    { path: 'reservacion', component: ReservacionClienteComponent},
    { path: 'ver-reservas', component: VerReservasComponent },
    { path: 'contacto', component: ContactoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DataTablesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
