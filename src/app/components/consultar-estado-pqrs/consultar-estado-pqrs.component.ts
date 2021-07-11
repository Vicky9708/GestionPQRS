import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-estado-pqrs',
  templateUrl: './consultar-estado-pqrs.component.html',
  styleUrls: ['./consultar-estado-pqrs.component.scss']
})
/**
 * Clase que contiene la logica del componente de consultas de PQRS
 */
export class ConsultarEstadoPQRSComponent implements OnInit {
  /**
   * Variables
   */
  correoElectronico:any;
  celular:any;
  pin:any;
  hablilitarBotonConsultar:any;
  mostrarErrorCorreo: any;


  constructor() {
    //Estilos iniciales del input
    this.mostrarErrorCorreo='border-gray-300 border-2 rounded-md p-1';
    this.hablilitarBotonConsultar='font-medium rounded-md p-2 text-white bg-indigo-200  border border-transparent justify-center';

   }

  ngOnInit(): void {  }

  /**
   * Metodo que valida que el correo sea escrito correctamente
   */
  validarFormatoCorreo(){

     //Validacion del formato de correo electronico
    if(this.correoElectronico.includes('@')&& (this.correoElectronico.charAt(this.correoElectronico.length-4)=='.' ||
    this.correoElectronico.charAt(this.correoElectronico.length-3)=='.') || (this.correoElectronico==''||this.correoElectronico==undefined) ){
      this.mostrarErrorCorreo='border-gray-300 border-2 rounded-md p-1';
    }else{
      this.mostrarErrorCorreo='border-red-800 border-2 rounded-md p-1';
    }

  }

  /**
   * Metodo que valida el formulario general
   */
  validarFormatoGeneral(){
      this.hablilitarBotonConsultar=((this.correoElectronico!=''&&this.correoElectronico!=undefined)||
      (this.celular!=''&&this.celular!=undefined))&&this.pin!=''&& this.pin!=undefined ?'font-medium rounded-md p-2 text-white bg-indigo-500  border border-transparent justify-center':
      'font-medium rounded-md p-2 text-white bg-indigo-200  border border-transparent justify-center';

  }
  /**
   * Metodo que consulta el estado de las PQRS
   */
  consultarEstadoPQRS(){
    console.log('Consultado');

  }

}
