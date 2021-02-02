import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthService]
})
export class HeaderComponent implements OnInit {
  public isLogged = false;
  public user: any;
  public user$: Observable<any> = this.authSvc.afAuth.user;
  constructor( public _info: InfoPaginaService,
              private router: Router,
              private authSvc: AuthService) { }

  async ngOnInit() {
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      this.isLogged = true;
    }
  }

  buscarProducto(termino: string){
    if(termino.length<1){
      return;
    }
    this.router.navigate(['search', termino]);
  }

  async onLogout(){
    try{
      await this.authSvc.logout();
      this.router.navigate(['/login']);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Se ha cerrado sesion correctamente'
      })
    }
    catch(error){
      console.log(error);
    }
  }

}
