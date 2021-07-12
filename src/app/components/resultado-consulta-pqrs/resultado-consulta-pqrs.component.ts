import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
@Component({
  selector: 'app-resultado-consulta-pqrs',
  templateUrl: './resultado-consulta-pqrs.component.html',
  styleUrls: ['./resultado-consulta-pqrs.component.scss']
})
export class ResultadoConsultaPQRSComponent implements OnInit {
  /**
   * Variables
   */
  url: any;
  arregloSolicitudes: any;
  arregloSeguimientoSolicitud:any;

  constructor(public json: JsonService) {
    //Se obtienen los parametros de la url
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    this.url = urlParams.get('url');

    this.consultarPQRS();


  }

  ngOnInit(): void {

  }
  /**
   * Metodo que consume el servicio de las PQRS por id
   */
  consultarPQRS() {
    this.json.getJson('http://localhost:3000/solicitudes?pin='+this.url).subscribe((res: any) => {
      this.arregloSolicitudes = res;
    })
  }
  /**
   * Metodo que activa la seccion del acordeon seleccionado
   * @param i posicion del acordeon
   */
  activarAcordeon(i:number,id:number){
    /**
     * Se consume el servicio del seguimiento de las solicitudes
     */
    this.json.getJson('http://localhost:3000/seguimientoSolicitud?idSolicitud='+id).subscribe((res:any)=>{

      this.arregloSeguimientoSolicitud=res;
      for (let j = 0; j < this.arregloSolicitudes.length; j++) {
           if(i!=j){
             this.arregloSolicitudes[j].activar=false;
           }
      }

      this.arregloSolicitudes[i].activar=this.arregloSolicitudes[i].activar?false:true;

    })



  }


}
