//La creación de este componente ha sido de manera automatica desde la consola
//con los comandos ng g c heroes/listado

import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  { 

  heroes: string[] = ['Spiderman','Ironman','Hulk','Daredevil'];
  borrado: string = "";
  esBorrado = false;

  borrarHeroe(){
    console.log("Borrando...");
    const heroeBorrado = this.heroes.shift() || ""; //Borra el primer elemento (con control + espacio vemos la descripción de los metodos)
    this.borrado = heroeBorrado;
    this.esBorrado = true;
  }

}
