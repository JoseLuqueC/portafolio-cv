export interface Producto {
  categoria: string;
  cod: string;
  titulo: string;
  url: string;
}

export interface DescripcionProducto{
  categoria: string;
  desc1: string;
  cliente: string;
  producto: string;
  subtitulo1: string;
  fecha: string;
  url:url;
}

export interface url{
  frontend: string;
  backend?: string;
}
