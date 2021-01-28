import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { InfoConocimiento } from '../../interfaces/info-conocimiento.interface';

@Component({
  selector: 'app-info-conocimiento',
  templateUrl: './info-conocimiento.component.html',
  styleUrls: ['./info-conocimiento.component.css']
})
export class InfoConocimientoComponent implements OnInit {

  
  infoConocimiento: InfoConocimiento;
  id: string;
  backend: string;
  frontend: string;

  constructor( private route: ActivatedRoute,
              public productosService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
      this.productosService.getInfoConocimiento(parametros['id'])
      .subscribe( (infoConocimiento: InfoConocimiento) => {
        this.infoConocimiento = infoConocimiento;
        this.id = parametros['id'];
      });
    });
  }
}