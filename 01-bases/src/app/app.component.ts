import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Root que está en el index.htmk
  templateUrl: './app.component.html',
  //template: '<span>Emilio</span>',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App'; // El titulo que podemos colocar en app.component.html
  numero: number = 10;
  base: number = 5;

  sumar() {
    this.numero += 1 //Es necesario el this para apuntar a la instancia
  }

  restar() {
    this.numero -= 1 //Es necesario el this para apuntar a la instancia
  }

  acumular( valor: number){
    this.numero += valor;
  }

  aumentarCinco( valor2: number){
    this.numero += valor2;
  }
}
