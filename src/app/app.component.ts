import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
              '../assets/css/main.css'],
})
export class AppComponent {
  
  constructor(public _infoPagina: InfoPaginaService){

  }
}
