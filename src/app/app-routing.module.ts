import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { GestionarPQRSComponent } from './components/gestionar-pqrs/gestionar-pqrs.component';


const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' }
  , {
    path: "bienvenida",
    component: BienvenidaComponent,
  },
  {
    path: "inicio",
    component: GestionarPQRSComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
