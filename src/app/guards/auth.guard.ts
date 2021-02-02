import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authSvc: AuthService, private router: Router){
    
  }
  user; 
  
  async canActivate() {
    this.user = await this.authSvc.getCurrentUser();
    if(this.user){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
    
  }
  
}
