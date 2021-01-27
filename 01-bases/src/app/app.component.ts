import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Root que está en el index.htmk
  templateUrl: './app.component.html',
  //template: '<span>Emilio</span>',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App'; // El titulo que podemos colocar en app.component.html
}
