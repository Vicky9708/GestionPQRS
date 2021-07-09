import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BuscarPQRSComponent } from './components/buscar-pqrs/buscar-pqrs.component';



@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BuscarPQRSComponent
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
