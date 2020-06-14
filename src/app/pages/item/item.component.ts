import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { DescripcionProducto, Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: DescripcionProducto;
  id: string;
  backend: string;
  frontend: string;

  constructor( private route: ActivatedRoute,
              public productosService: ProductosService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros =>{
      this.productosService.getProducto(parametros['id'])
      .subscribe( (producto: DescripcionProducto) => {
        this.producto = producto;
        this.id = parametros['id'];
        this.frontend = producto.url.frontend;
        this.backend = producto.url.backend;
      });
    });
  }

}
