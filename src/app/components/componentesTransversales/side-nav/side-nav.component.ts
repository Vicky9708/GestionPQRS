import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  itemBuscar='';
  itemConsulta='';
  constructor() {
    let pathname = window.location.pathname;
    this.itemConsulta=pathname=='/consultar-estado'?'bg-pink-600':'';
    this.itemBuscar=pathname=='/buscar-solicitud'?'bg-pink-600':'';
   }

  ngOnInit(): void {
  }

}
