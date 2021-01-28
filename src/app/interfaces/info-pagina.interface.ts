

export interface InfoPagina{
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  equipo_trabajo?: any[];
}

export interface conocimiento{
  nombre: string;
  valor: string;
  ref?: string;
  img?: string;
}

export interface cursos{
  titulo: string;
  descripcion?: string;
  img?: string;
}