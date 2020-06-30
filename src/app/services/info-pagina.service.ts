import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, conocimiento } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
  conocimiento: conocimiento [] = [];

  constructor( private http: HttpClient ) { 
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarConocimiento();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada=true;
      this.info = resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://joseluqueweb.firebaseio.com/equipo.json')
    .subscribe((resp: any[]) =>{
      this.equipo = resp;
    });
  }

  private cargarConocimiento(){
    this.http.get('https://joseluqueweb.firebaseio.com/conocimientos.json')
    .subscribe((resp: any[]) =>{
      this.conocimiento = resp;
      console.log(resp);
    });
  }


}
