import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  itemBuscar=false;
  itemConsulta=false;
  constructor() {
    let pathname = window.location.pathname;
    this.itemConsulta=pathname=='/consultar-estado'?true:false;
    this.itemBuscar=pathname=='/buscar-solicitud'?true:false;
   }

  ngOnInit(): void {
  }

}
