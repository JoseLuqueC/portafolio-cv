import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, curriculum } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];
  curriculum: curriculum = {};

  constructor( private http: HttpClient ) { 
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarCurriculum();
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

  private cargarCurriculum(){
    this.http.get('https://joseluqueweb.firebaseio.com/curriculum.json')
    .subscribe((resp: any) =>{
      this.curriculum = resp;
    });
  }


}
