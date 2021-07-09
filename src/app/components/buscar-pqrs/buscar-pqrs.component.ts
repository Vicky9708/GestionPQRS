import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-buscar-pqrs',
  templateUrl: './buscar-pqrs.component.html',
  styleUrls: ['./buscar-pqrs.component.scss']
})
export class BuscarPQRSComponent implements OnInit {

  variablePrueba: any;

  constructor() {
    this.variablePrueba="";
   }

  ngOnInit(): void {
  }

}
