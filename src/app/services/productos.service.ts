import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { InfoConocimiento } from '../interfaces/info-conocimiento.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  infoConocimiento: InfoConocimiento[] = []; 
  productosFiltrados: Producto[] = [];
  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise((resolve, reject)=>{

      this.http.get('https://joseluqueweb.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[])=>{
        this.productos = resp;
        this.cargando = false;
        resolve();
      });
    });
  }


  getProducto(id: string){
    return this.http.get(`https://joseluqueweb.firebaseio.com/productos/${id}.json`);
  }
  getInfoConocimiento(id: string){
    return this.http.get(`https://joseluqueweb.firebaseio.com/info-conocimiento/${id}.json`);
  }
  
  buscarProducto(termino: string){

    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then(()=>{
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      });
    }else{
      // aplicar filtro
      this.filtrarProductos(termino);
    }
    
  }

  private filtrarProductos( termino: string ){
    //se limpia el arreglo de los productos filtrados
    this.productosFiltrados = [];

    termino = termino.toLocaleLowerCase();

    /*se llena el arreglo de productos filtrados
     con los productos que coinsidan con la busqueda
    */
    this.productos.forEach(prod=>{
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>=0 || tituloLower.indexOf(termino)>=0){
        this.productosFiltrados.push(prod);
      }
    });

  }
}
