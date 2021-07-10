import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BuscarPQRSComponent } from './components/buscar-pqrs/buscar-pqrs.component';
import { ConsultarEstadoPQRSComponent } from './components/consultar-estado-pqrs/consultar-estado-pqrs.component';
import { HeaderComponent } from './components/componentesTransversales/header/header.component';
import { SideNavComponent } from './components/componentesTransversales/side-nav/side-nav.component';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BuscarPQRSComponent,
    ConsultarEstadoPQRSComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
