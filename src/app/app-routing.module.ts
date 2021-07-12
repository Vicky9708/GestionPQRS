import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BuscarPQRSComponent } from './components/buscar-pqrs/buscar-pqrs.component';
import { ConsultarEstadoPQRSComponent } from './components/consultar-estado-pqrs/consultar-estado-pqrs.component';
import { ResultadoConsultaPQRSComponent } from './components/resultado-consulta-pqrs/resultado-consulta-pqrs.component';


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
  {
    path: "resultados-pqrs",
    component: ResultadoConsultaPQRSComponent,
  }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
