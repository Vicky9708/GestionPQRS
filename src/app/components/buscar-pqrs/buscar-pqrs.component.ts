import { Component, OnInit  } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';

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

  constructor(public json:JsonService) {
    this.tipo='todos';
    this.activarModal=false;
    this.idTramiteActual=0;

    //Servicio que consume el api de los tramites
    this.json.getJson('http://localhost:3000/tramites').subscribe((res:any)=>{
      this.arregloPrincipal=res;
      this.arregloFiltrado=this.arregloPrincipal
    })



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
   */
   filtrar(){
     if(this.fecha!='' &&this.fecha!=undefined){
      this.arregloFiltrado=this.tipo!='todos'?this.arregloPrincipal.filter((x:any)=>x.tipo===this.tipo && x.fecha==this.fecha):
      this.arregloPrincipal.filter((x:any)=>x.fecha===this.fecha)

     }
   else{
    this.arregloFiltrado=this.tipo!='todos'?this.arregloPrincipal.filter((x:any)=>x.tipo===this.tipo):this.arregloPrincipal

   }

  }
  /**
   * Metodo que limpia los filtros de los tramites
   */
  limpiarFiltros(){
    this.tipo='todos';
    this.fecha=undefined;
      this.arregloFiltrado=this.arregloPrincipal;
  }

}
