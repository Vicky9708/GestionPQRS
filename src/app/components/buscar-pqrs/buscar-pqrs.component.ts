import { Component, OnInit  } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-buscar-pqrs',
  templateUrl: './buscar-pqrs.component.html',
  styleUrls: ['./buscar-pqrs.component.scss']
})
export class BuscarPQRSComponent implements OnInit {
  tipo: any;
  fecha:any;
  arregloPrincipal: any;
  activarModal:any;
  idTramiteActual:any;
  arregloFiltrado:any;

  constructor() {
    this.tipo='todos';
    this.activarModal=false;
    this.idTramiteActual=0;
    this.arregloPrincipal=[{
      fecha: '2021-05-05',
      tipo: 'PQRS',
      titulo: 'Queja sobre el area financiera por el mal servicio',
      descripcion:'El día de ayer realice un pago y me cobraron más de lo que salía en el recibo, justificando que había un nuevo IVA por parte de la empresa',
      id:0
    },
    {
      fecha: '2021-05-06',
      tipo: 'factura',
      titulo: 'Entrega factura AL-00001',
      descripcion:'El día de ayer realice un pago y me cobraron más de lo que salía en el recibo, justificando que había un nuevo IVA por parte de la empresa',
      id:1
    },{
      fecha: '2021-05-07',
      tipo: 'PQRS',
      titulo: 'Queja sobre el area financiera por el mal servicio',
      descripcion:'El día de ayer realice un pago y me cobraron más de lo que salía en el recibo, justificando que había un nuevo IVA por parte de la empresa',
      id:2
    },{
      fecha: '2021-05-08',
      tipo: 'factura',
      titulo: 'Entrega factura AL-00002',
      descripcion:'El día de ayer realice un pago y me cobraron más de lo que salía en el recibo, justificando que había un nuevo IVA por parte de la empresa',
      id:3
    },{
      fecha: '2021-05-05',
      tipo: 'PQRS',
      titulo: 'Queja sobre el area administrativa por el mal servicio',
      descripcion:'El día de ayer realice un pago y me cobraron más de lo que salía en el recibo, justificando que había un nuevo IVA por parte de la empresa',
      id:4
    }];
    this.arregloFiltrado=this.arregloPrincipal


   }

  ngOnInit(): void {
  }
  /**
   * Metodo que abre el detalle del tramite
   */
  verDetalleTramite(id:any){
    this.activarModal=true;
    this.idTramiteActual=id;

  }
  /**
   * Metodo que filtra por tipo o por fecha
   * @param filtro  indica cual filtro esta aplicando el usuario
   */
   filtrar(filtro:any){
     //Si el filtro es por tipo
    if(filtro==1){
      this.arregloFiltrado=this.tipo!='todos'?this.arregloPrincipal.filter((x:any)=>x.tipo===this.tipo):this.arregloPrincipal
    }//Si el filtro es por fecha
    else if(filtro==2){
      this.arregloFiltrado=this.arregloPrincipal.filter((x:any)=>x.fecha===this.fecha)
    }

   }



}
