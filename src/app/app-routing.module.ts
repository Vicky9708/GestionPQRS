import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BuscarPQRSComponent } from './components/buscar-pqrs/buscar-pqrs.component';
import { ConsultarEstadoPQRSComponent } from './components/consultar-estado-pqrs/consultar-estado-pqrs.component';


const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' }
  , {
    path: "bienvenida",
    component: BienvenidaComponent,
  },
  {
    path: "buscar-solicitud",
    component: BuscarPQRSComponent,
  },
  {
    path: "consultar-estado",
    component: ConsultarEstadoPQRSComponent,
  },
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
