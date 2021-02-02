import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }
  async login(email: string, password: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch(error){
      console.error(error);
    }
    
  }
  async logout(){
    try{
      await  this.afAuth.signOut();
    }
    catch(error){
      console.error(error);
    }
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
