import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

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
    console.log('nav');
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
      this.router.navigate(['/home']);
    }
    catch(error){
      console.log(error);
    }
  }

}
