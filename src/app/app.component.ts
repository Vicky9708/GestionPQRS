import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GestionPQRS';
  mostrarBarras=true;


  constructor(){
    //Consulta del pathname para validar donde esta ubicado el usuario
    let pathname = window.location.pathname;
    this.mostrarBarras=pathname=='/bienvenida'||pathname=='/'?false:true;

  }
}
