import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',

    //El template puede ser html o con código
    template: ` 
    <h1>{{titulo}}</h1>

    <h3>Aumentar de 1 en 1</h3>

    <button (click) = "acumular(-1)">-1</button>
    <span>{{numero}}</span>
    <button (click) = "acumular(+1)">+1</button>

    <h3>Aumentar de 1 en 1 sin método</h3>

    <button (click) = "numero3 = numero3 - 1">-1</button>
    <span>{{numero3}}</span>
    <button (click) = "numero3 = numero3 + 1">+1</button>

    <h3>Aumentar de {{base}} en 5</h3>
    <button (click) = "aumentarCinco(-base)">-{{base}}</button>
    <span>{{numero2}}</span>
    <button (click) = "aumentarCinco(base)">+{{base}}</button>
`
})
export class ContadorComponent {

    titulo: string = 'Contador App'; // El titulo que podemos colocar en app.component.html
    numero: number = 0;
    numero2: number = 0;
    numero3: number = 0;
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
        this.numero2 += valor2;
    }
    
}